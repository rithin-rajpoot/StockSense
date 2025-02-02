import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {SearchBar} from '../components/SearchBar';
import {StockChart} from '../components/StockChart';
import {StockMetrics} from '../components/StockMetrics';
import {NewsSection} from '../components/NewsSection';
import {getStockMarketPrice,getStockMarketNews} from '../Services/stockData';



export default function LandingPage() {

  const navigate = useNavigate();

  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getNews(query){
    const news = await getStockMarketNews(query);
    const data1 = news.data[0];
    const data2 = news.data[1];
    const newsData = [
      {
        title: data1.title,
        source: data1.source,
        url: data1.url,
        description: data1.description,
        publishedAt : data1.published_at,
        image: data1.image_url
      },
      {
        title: data2.title,
        source: data2.source,
        url: data2.url,
        description: data2.description,
        publishedAt : data2.published_at,
        image: data2.image_url
      }
    ]
    return newsData;
  }

  async function getMetrics(query){
    const metrics = await getStockMarketPrice(query);
    const data = metrics.data[0];
    const metricsData = [
        { name: "Company Name", value: data.name },
        { name: "Price", value: `$${data.price}` },
        { name: "Day High", value: `$${data.day_high}` },
        { name: "Day Low", value: `$${data.day_low}` },
        { name: "Open Price", value:` $${data.day_open}` },
        { name: "Previous Close", value: `$${data.previous_close_price}` },
        { name: "Volume", value: data.volume },
        { name: "52-Week High", value: `$${data["52_week_high"]}` },
        { name: "52-Week Low", value: `$${data["52_week_low"]}` },
      ]
    return metricsData;
  }

  async function handleSearch(query) {
    setLoading(true);
    console.log('Searching for:', query);
    const newsData = await getNews(query);
    const metricsData = await getMetrics(query);
    setStockData(
      {
        news: newsData,
        metrics: metricsData,
        chartData: metricsData.map(m => ({ time: "Now", price: m.value })).filter(m => !isNaN(m.price))
      });
      setLoading(false);
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
            {loading && <p className="text-blue-500">Loading...</p>}
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
