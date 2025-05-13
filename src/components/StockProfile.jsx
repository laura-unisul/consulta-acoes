import React from "react";

export default function StockProfile({ data }) {
  const roundStockValue = (string) => Number(string).toFixed(2);
  return (
    <>
      {data && (
        <div className="stock-profile-container">
          <h2 className="stock-profile-ticker">
            <b>SÍMBOLO:</b> {data["01. symbol"]}
          </h2>
          <div className="stock-profile-card">
            <b>PREÇO ATUAL:</b>
            <br />
            <div className="stock-value">
              {`$${roundStockValue(data["05. price"])}`}
            </div>
          </div>
          <div className="stock-profile-card">
            <b>ABERTURA DO DIA:</b>
            <br />
            <div className="stock-value">
              {`$${roundStockValue(data["02. open"])}`}
            </div>
          </div>
          <div className="stock-profile-card">
            <b>ALTA DO DIA:</b>
            <br />
            <div className="stock-value">
              {`$${roundStockValue(data["03. high"])}`}
            </div>
          </div>
          <div className="stock-profile-card">
            <b>BAIXA DO DIA:</b>
            <br />
            <div className="stock-value">
              {`$${roundStockValue(data["04. low"])}`}
            </div>
          </div>
          <div className="stock-profile-card">
            <b>FECHAMENTO ANTERIOR:</b>
            <br />
            <div className="stock-value">
              {`$${roundStockValue(data["08. previous close"])}`}
            </div>
          </div>
          <div className="stock-profile-card">
            <b>VARIAÇÃO:</b>
            <br />
            <div className="stock-value">
              {`${roundStockValue(data["09. change"])}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
