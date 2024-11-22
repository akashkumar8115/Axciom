import { useForm } from 'react-hook-form';

export default function BookForm({ onSubmit, initialData }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    {...register('title', { required: 'Title is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                    {...register('author', { required: 'Author is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.author && (
                    <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">ISBN</label>
                <input
                    {...register('isbn', { required: 'ISBN is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
