import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {SearchBar} from '../components/SearchBar';
import {StockChart} from '../components/StockChart';
import {StockMetrics} from '../components/StockMetrics';
import {NewsSection} from '../components/NewsSection';

const dummyStockData = {
  symbol: 'AAPL',
  companyName: 'Apple Inc.',
  metrics: [
    { name: 'Market Cap', value: '$2.53T', change: 1.2 },
    { name: 'P/E Ratio', value: '28.5', change: -0.8 },
    { name: 'Revenue', value: '$394.3B', change: 2.5 },
    { name: 'EPS', value: '$6.13', change: 1.7 },
    { name: '52W High', value: '$198.23', change: undefined },
    { name: '52W Low', value: '$124.17', change: undefined },
    { name: 'Volume', value: '82.5M', change: 3.2 },
    { name: 'Dividend Yield', value: '0.51%', change: -0.1 },
    { name: 'Beta', value: '1.28', change: 0.3 }
  ],
  news: [
    {
      id: '1',
      title: 'Apple Announces New iPhone Launch Event',
      source: 'Tech News Daily',
      url: '#',
      publishedAt: '2024-03-15T10:30:00Z',
      summary: 'Apple has scheduled its annual iPhone event for early September, where it is expected to unveil the next generation of iPhones with significant camera improvements.'
    },
    {
      id: '2',
      title: 'Q1 Earnings Beat Market Expectations',
      source: 'Financial Times',
      url: '#',
      publishedAt: '2024-03-14T15:45:00Z',
      summary: 'Apple reported strong Q1 earnings, surpassing analyst expectations with record services revenue and continued iPhone sales growth.'
    },
    {
      id: '3',
      title: 'Apple Expands AI Investment',
      source: 'Tech Insider',
      url: '#',
      publishedAt: '2024-03-13T09:15:00Z',
      summary: 'The tech giant announces major investments in artificial intelligence research and development, signaling a strong push into AI technologies.'
    },
    {
      id: '4',
      title: 'New MacBook Series in Development',
      source: 'Mac Rumors',
      url: '#',
      publishedAt: '2024-03-12T14:20:00Z',
      summary: 'Sources suggest Apple is developing a new series of MacBooks featuring next-generation chips and improved display technology.'
    }
  ],
  // chartData: Array.from({ length: 30 }, (_, i) => ({
  //   timestamp: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString(),
  //   price: 150 + Math.sin(i * 0.5) * 20 + Math.random() * 5
  // }))
};

export default function LandingPage() {

  const navigate = useNavigate();

  const [stockData, setStockData] = useState(null);

  // useEffect(() => {
  //   setStockData(dummyStockData);
  // },[stockData]);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setStockData(dummyStockData);
  };

  const handleAnalyze = () => {
    if (stockData) {
      navigate('/report');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-2">
        <div className="flex gap-2">
          {/* Left Section */}
          <div className="w-[35%] flex flex-col h-[calc(100vh-1rem)]">
            <SearchBar onSearch={handleSearch} />
            <div className="flex-grow mt-2 mb-2 overflow-y-auto">
              <NewsSection news={stockData?.news || []} />
            </div>
            <button
            onClick={handleAnalyze}
            disabled={!stockData}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
           Analyze
          </button>
          </div>

          {/* Right Section */}
          <div className="w-[65%] flex flex-col gap-2">
            <div className="h-[62vh] overflow-hidden">
              <StockChart data={stockData?.chartData || []} />
              {/* <TradingViewWidget /> */}
            </div>
            <div className="h-[36vh]">
              <StockMetrics metrics={stockData?.metrics || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}