import { Component, signal, inject } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Product, CreateProductDto } from "../../models/product.interface";
import { ProductsStateService } from "../../services/products-state.service";

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  categories = signal<string[]>([]);
  isEditMode = signal(false);
  productForm: FormGroup;

  private fb = inject(FormBuilder);
  private productStateService = inject(ProductsStateService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.initForm();
    this.loadCategories();

    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode.set(true);
      this.loadProductForEdit(+productId);
    }
  }

  private loadCategories() {
    this.productStateService.getCategories().subscribe({
      next: (cats) => this.categories.set(cats),
      error: (err) => console.error('Failed to load categories', err),
    });
  }

  private loadProductForEdit(id: number) {
    this.productStateService.getProduct(id).subscribe({
      next: (product) => {
        if (!product) {
          alert('Product not found');
          this.router.navigate(['/']);
          return;
        }
        this.preloadFormValues(product);
      },
      error: () => {
        alert('Failed to load product');
        this.router.navigate(['/']);
      },
    });
  }

  private preloadFormValues(product: Product) {
    this.productForm.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      imageUrl: product.image,
    });
  }

  private initForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0.1)]],  // <-- Add Validators.required here
      description: ['', [Validators.required, Validators.maxLength(100)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formValues = this.productForm.value;
    const dto: CreateProductDto = {
      title: formValues.title,
      description: formValues.description,
      image: formValues.imageUrl,
      category: formValues.category,
      price: +formValues.price,
    };

    if (this.isEditMode()) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
      this.productStateService.updateProduct(id, {
        id, ...dto,
        rating: {
          rate: 0,
          count: 0
        }
      }).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Update failed', err),
      });
    } else {
      this.productStateService.createProduct(dto);
      setTimeout(() => this.router.navigate(['/']), 500);
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
