import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductsStateService } from '../../services/products-state.service';
import { CurrencyPipe, NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
  searchTerm = signal('');

  private readonly productStateService = inject(ProductsStateService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.productStateService.products$.subscribe((products) =>
      this.products.set(products)
    );
  }

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.products().filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.description?.toLowerCase().includes(term)
    );
  });


  onSelectProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  onDeleteProduct(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (confirm('Are you sure you want to delete this product?')) {
      this.productStateService.deleteProduct(id).subscribe({
        next: () => console.log('Product deleted'),
        error: (err) => console.error('Failed to delete product', err),
      });
    }
  }

  onEditProduct(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/products', id, 'edit']);
  }

  navigateToAddProduct() {
    this.router.navigate(['/products/new']);
  }
}
