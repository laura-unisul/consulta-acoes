export async function getStockData(ticker, setStock, setNotFound) {
  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;
  setNotFound(false);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      setNotFound(true);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data["Global Quote"]) {
      setStock(data["Global Quote"]);
    } else {
      setNotFound(true);
    }
  } catch (error) {
    console.error("Error fetching stock quote:", error.message);
    return null;
  }
}
