const baseUrl = 'https://api.stockdata.org/v1/data/quote';
const apiToken = 'WHtU0lIXajtV9Q4wg9Y9AWXFmQJxZYKvMIZSWXUF';  
const filterEntities = true; 
const language = 'en';
//https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=7LJtKDp7cgsYJgT6dRMTna1G7ybpXWP73Tud2dHd
// Function to fetch stock market news
async function getStockMarketPrice(symbols) {
  try {
    const response = await fetch(`${baseUrl}?symbols=${symbols}&filter_entities=${filterEntities}&language=${language}&api_token=${apiToken}`) 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock market news:', error);
    // Display an error message to the user
    return null;
  }
}

async function getStockMarketNews(symbols) 
{
    try {
      const response = await fetch(`https://api.stockdata.org/v1/news/all?symbols=${symbols}&filter_entities=${filterEntities}&language=en&api_token=${apiToken}`) 
      const data = await response.json();
      // console.log(data.data[0]);
      return data;
    } catch (error) {
      console.error('Error fetching stock market news:', error);
      // Display an error message to the user
      return null;
    }
}
getStockMarketNews('AAPL');

export {getStockMarketPrice,getStockMarketNews}