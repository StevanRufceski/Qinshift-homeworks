import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Product, CreateProductDto } from '../models/product.interface';
import { ProductsApiService } from './products-api.service';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class ProductsStateService {
  private readonly initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
  };

  private stateSubject = new BehaviorSubject<ProductState>(this.initialState);
  private state$ = this.stateSubject.asObservable();

  products$ = this.state$.pipe(map((state) => state.products));
  loading$ = this.state$.pipe(map((state) => state.loading));
  error$ = this.state$.pipe(map((state) => state.error));

  constructor(private readonly productApiService: ProductsApiService) {}

  private updateState(partial: Partial<ProductState>) {
    const current = this.stateSubject.value;
    this.stateSubject.next({ ...current, ...partial });
  }

  loadProducts() {
    this.updateState({ loading: true });

    this.productApiService.getAllProducts().subscribe({
      next: (data) => this.updateState({ products: data, loading: false }),
      error: () => this.updateState({ loading: false, error: 'Failed to load products' }),
    });
  }

  createProduct(productData: CreateProductDto) {
    this.updateState({ loading: true });

    const requestBodyWithId = { ...productData, id: Date.now() };

    this.productApiService.createProduct(requestBodyWithId).subscribe({
      next: (newProduct) => {
        const current = this.stateSubject.value.products;
        this.updateState({ products: [...current, newProduct], loading: false });
      },
      error: () => this.updateState({ loading: false, error: 'Failed to create product' }),
    });
  }

  getProduct(id: number): Observable<Product | undefined> {
    const local = this.stateSubject.value.products.find(p => p.id === id);
    if (local) return of(local);

    return this.productApiService.getProductById(id).pipe(
      map((product) => {
        if (product) {
          const updatedProducts = [...this.stateSubject.value.products, product];
          this.updateState({ products: updatedProducts });
        }
        return product;
      })
    );
  }

  updateProduct(id: number, updatedProduct: Product): Observable<Product> {
    this.updateState({ loading: true });

    return this.productApiService.updateProduct(id, updatedProduct).pipe(
      map((updated) => {
        const updatedList = this.stateSubject.value.products.map((p) =>
          p.id === id ? updated : p
        );
        this.updateState({ products: updatedList, loading: false });
        return updated;
      })
    );
  }

  deleteProduct(id: number): Observable<void> {
    this.updateState({ loading: true });

    return this.productApiService.deleteProduct(id).pipe(
      map(() => {
        const remaining = this.stateSubject.value.products.filter(p => p.id !== id);
        this.updateState({ products: remaining, loading: false });
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.productApiService.getCategories();
  }
}
