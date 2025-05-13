import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import StockProfile from "./components/StockProfile";
import SearchSection from "./components/SearchSection";

function App() {
  const [stock, setStock] = useState();
  const [search, setSearch] = useState();
  const [notFound, setNotFound] = useState(false);

  return (
    <div className="container">
      <Header />
      <main className="content-wrapper">
        Consulte as informações dos principais players do mercado em um só local
        <SearchSection
          search={search}
          setSearch={setSearch}
          setData={setStock}
          setNotFound={setNotFound}
        />
        {notFound ? (
          <div className="not-found">
            Não foram encontrados resultados válidos para a busca realizada, por
            favor insira um ticker válido.
          </div>
        ) : (
          <StockProfile data={stock} />
        )}
      </main>
    </div>
  );
}

export default App;
