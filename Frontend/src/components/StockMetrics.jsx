import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// export default function StockMetrics({metrics}) {
  // const metrics = [
  //   { label: 'Market Cap', value: '$2.5T', trend: 'up' },
  //   { label: 'P/E Ratio', value: '25.4', trend: 'down' },
  //   { label: '52 Week High', value: '$182.94', trend: 'up' },
  //   { label: '52 Week Low', value: '$124.17', trend: 'up' },
  //   { label: 'Volume', value: '82.5M', trend: 'down' },
  //   { label: 'Dividend Yield', value: '0.5%', trend: 'up' },
  // ];

//   return (
//     <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 overflow-y-auto">
//       <h2 className="text-xl font-bold mb-4 dark:text-white">Stock Metrics</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {metrics.map((metric, index) => (
//           <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
//             <div className="flex justify-between items-start">
//               <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
//               {metric.trend === 'up' ? (
//                 <TrendingUp className="w-4 h-4 text-green-500" />
//               ) : (
//                 <TrendingDown className="w-4 h-4 text-red-500" />
//               )}
//             </div>
//             <p className="text-lg font-semibold dark:text-white mt-1">{metric.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

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