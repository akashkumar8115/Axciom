import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdvancedSearch() {
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        filters: {
            genre: [],
            language: [],
            publishYear: '',
            availability: 'all'
        },
        sort: 'relevance'
    });

    const genres = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Art', 'Technology'];
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Advanced Search</h2>
            <div className="space-y-6">
                <input
                    type="text"
                    placeholder="Search by title, author, ISBN..."
                    value={searchParams.keyword}
                    onChange={(e) => setSearchParams({ ...searchParams, keyword: e.target.value })}
                    className="w-full rounded-md border-gray-300"
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Genres</label>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                            {genres.map(genre => (
                                <label key={genre} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={searchParams.filters.genre.includes(genre)}
                                        onChange={(e) => {
                                            const newGenres = e.target.checked
                                                ? [...searchParams.filters.genre, genre]
                                                : searchParams.filters.genre.filter(g => g !== genre);
                                            setSearchParams({
                                                ...searchParams,
                                                filters: { ...searchParams.filters, genre: newGenres }
                                            });
                                        }}
                                        className="rounded border-gray-300"
                                    />
                                    <span className="ml-2">{genre}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                            {languages.map(language => (
                                <label key={language} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={searchParams.filters.language.includes(language)}
                                        onChange={(e) => {
                                            const newLanguages = e.target.checked
                                                ? [...searchParams.filters.language, language]
                                                : searchParams.filters.language.filter(l => l !== language);
                                            setSearchParams({
                                                ...searchParams,
                                                filters: { ...searchParams.filters, language: newLanguages }
                                            });
                                        }}
                                        className="rounded border-gray-300"
                                    />
                                    <span className="ml-2">{language}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Publish Year</label>
                        <input
                            type="number"
                            value={searchParams.filters.publishYear}
                            onChange={(e) => setSearchParams({
                                ...searchParams,
                                filters: { ...searchParams.filters, publishYear: e.target.value }
                            })}
                            className="mt-1 block w-full rounded-md border-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sort By</label>
                        <select
                            value={searchParams.sort}
                            onChange={(e) => setSearchParams({ ...searchParams, sort: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="year">Publication Year</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                </div>

                <button
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </motion.div>
    );
}
