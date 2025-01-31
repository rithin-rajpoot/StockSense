import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const StockChart = ({ data }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white">Stock Chart</h2>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? (
            <Sun className="text-yellow-500" />
          ) : (
            <Moon className="text-gray-600" />
          )}
        </button>
      </div>
      <div className="w-full flex flex-col items-center h-[calc(100%-2rem)] text-gray-500 dark:text-gray-400">
      {/* <h2 className="text-xl text-gray-500 font-semibold">Chart will be displayed here</h2> */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="5 3" />
            <XAxis dataKey="time" />
            <YAxis /> 
            {/* domain={['dataMin', 'dataMax']} */}
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
