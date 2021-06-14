import React, { useEffect, useState } from "react";

import ReactIcon from "./assets/react-js.svg";

//Components
import Search from "./Components/Search";
import Table from "./Components/Table";

//Axios
import { getAllCrypto } from "./api/requests";
import moment from "moment";
import Pagination from "./Components/Pagination";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [search, setSearch] = useState("");
  const [lastDateUpdated, setLastDateUpdated] = useState(null);

  useEffect(() => {
    getCrypoListHandler();
    // startIntervalHandler();
    setLastDateUpdated(moment().format("LTS"));
  }, []);

  const startIntervalHandler = () => {
    setInterval(() => {
      getCrypoListHandler();
      setLastDateUpdated(moment().format("LTS"));
    }, 60000);
  };

  const getCrypoListHandler = async () => {
    //TODO : Loader
    try {
      const data = await getAllCrypto();
      setCryptoList(data);
      setMaxPage(Math.ceil(data.length / 20));
    } catch (error) {
      console.error(error);
    }
  };

  const orderingDataHandler = (order, param) => {
    const dataListCopy = [...cryptoList];
    if (!order) {
      return setCryptoList(dataListCopy.sort((a, b) => b[param] - a[param]));
    }
    return setCryptoList(dataListCopy.sort((a, b) => a[param] - b[param]));
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full px-20">
        <div className="flex flex-col text-center my-10">
          <div className="flex flex-col md:flex-row items-center justify-center mb-10">
            <img src={ReactIcon} alt="react_icon" className="w-12 h-12 mr-5" />
            <span className="font-semibold text-2xl">React Crypto-Tracker</span>
          </div>
          <h1 className="text-4xl font-bold">
            Today's Cryptocurrency Prices Market Cap
          </h1>
        </div>
        <div className="flex items-center justify-between mb-5 mt-10">
          <div className="w-1/3">
            <Search
              onChange={(value) =>
                setSearch(value ? value.toLowerCase() : value)
              }
              value={search}
            />
          </div>
          <span className="text-gray-500">{`Last Update ${lastDateUpdated}`}</span>
        </div>
        <div className="mx-auto min-w-full">
          <Table
            value={search}
            data={cryptoList ? cryptoList : []}
            onOrdering={orderingDataHandler}
            currentPage={currentPage}
          />
          {cryptoList.length > 0 && (
            <Pagination
              onNext={() => setCurrentPage(currentPage + 1)}
              onBack={() => setCurrentPage(currentPage - 1)}
              maxPages={maxPage}
              currentPage={currentPage}
              totals={cryptoList.length}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
