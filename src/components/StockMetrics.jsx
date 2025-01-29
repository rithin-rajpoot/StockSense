import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StockMetrics = ({ metrics }) => {
  return (
    <div className="w-full h-full overflow-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border-2 border-gray-300 dark:border-gray-600">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Stock Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-500">
            <p className="text-sm text-gray-500 dark:text-gray-400">{metric.name}</p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold dark:text-white">{metric.value}</p>
              {metric.change !== undefined && (
                <span className={`flex items-center ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(metric.change)}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};