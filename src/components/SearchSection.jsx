import React from "react";
import { getStockData } from "../utils/getStockData";

export default function SearchSection({
  search,
  setSearch,
  setData,
  setNotFound,
}) {
  function handleSuggestion(ticker) {
    setSearch(ticker);
    getStockData(ticker, setData, setNotFound);
  }

  return (
    <>
      <div className="input-wrapper">
        <div className="search-input-label">Encontre sua ação</div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            type="text"
            id="ticker"
            name="ticker"
            placeholder="Digite o ticker"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            onClick={() => getStockData(search, setData, setNotFound)}
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="suggestions-container">
        Tickers mais procurados:
        <div className="suggestions-wrapper">
          <button
            type="button"
            className="suggestion-card"
            onClick={() => handleSuggestion("AAPL")}
          >
            AAPL
          </button>
          <button
            type="button"
            className="suggestion-card"
            onClick={() => handleSuggestion("GOOGL")}
          >
            GOOGL
          </button>
          <button
            type="button"
            className="suggestion-card"
            onClick={() => handleSuggestion("MSFT")}
          >
            MSFT
          </button>
        </div>
      </div>
    </>
  );
}
