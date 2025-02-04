import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export const NewsSection = ({ news }) => {
  const [timeFilter, setTimeFilter] = useState('all');

  const timeFilters = [
    { value: 'all', label: 'All Time' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
  ];

  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white">Latest News</h2>
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="px-3 py-1 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {timeFilters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>

<div className="space-y-4">
        {news.map((item) => (
          <article className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-500">
            <h3 className="font-semibold mb-2 dark:text-white">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                {item.title}
              </a>
            </h3>
            <div className='mt-2 mb-3 w-full h-52 overflow-hidden'>
              <img className='w-full h-full object-fit rounded-lg' src={item.image} alt="" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
            <div className="mt-3 flex justify-between items-center text-sm text-gray-400 dark:text-gray-400">
              <span>{item.source}</span>
              <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}