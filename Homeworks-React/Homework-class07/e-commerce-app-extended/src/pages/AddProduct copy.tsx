import "./AddProduct.css";
import { useForm } from "react-hook-form";
import { CategoriesContext } from '../context/categories.context';
import { useContext } from 'react';

interface AddProductForm {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    rate: number;
    count: number;
}

export const AddProduct = () => {
    const { categories } = useContext(CategoriesContext);
    const { register, handleSubmit, formState } = useForm<AddProductForm>();
    const { errors, isValid, isSubmitting } = formState;

    const onSubmit = async (data: AddProductForm) => {
        // Submit the form data to the API or handle it as needed
        console.log(data);
    };

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(onSubmit)
        }}>
            <h2>Add Product</h2>

            <label htmlFor="title">
                Title:
                <input type="text" {...register('title', { required: true, minLength: 3 })} />
                {errors.title && <div>This field is required and must be at least 3 characters long</div>}
            </label>

            <label htmlFor="description">
                Description:
                <textarea rows={5} {...register('description', { required: true, minLength: 10, maxLength: 500 })} />
                {errors.description && <div>This field is required and must be between 10 and 500 characters long</div>}
            </label>

            <label htmlFor="category">
                Category:
                <select {...register('category', { required: true })}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && <div>Please select a category</div>}
            </label>

            <label htmlFor="image">
                Image:
                <input type="text" {...register('image', { required: true })} />
                {errors.image && <div>This field is required</div>}
            </label>

            <label htmlFor="price">
                Price:
                <input type="number" {...register('price', { required: true, min: 0 })} />
                {errors.price && <div>This field is required and must be a positive number</div>}
            </label>

            <label htmlFor="rate">
                Rate:
                <input type="number" {...register('rate', { required: true, min: 0 })} />
                {errors.rate && <div>This field is required and must be a positive number</div>}
            </label>

            <label htmlFor="count">
                Count:
                <input type="number" {...register('count', { required: true, min: 0 })} />
                {errors.count && <div>This field is required and must be a positive number</div>}
            </label>

            <button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Add Product'}
            </button>

        </form>
    );
};

