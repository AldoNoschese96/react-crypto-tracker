import React from "react";

//Components
import { CoinWrapper } from "./CoinWrapper";
import ArrowOrderHandler from "./ArrowOrderHandler";

const Table = ({ data, onOrdering, value = "", currentPage }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    <div className="flex justify-between items-center">
                      Price
                      <ArrowOrderHandler
                        onOrdering={(state) =>
                          onOrdering(state, "current_price")
                        }
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    <div className="flex justify-between items-center">
                      24h %
                      <ArrowOrderHandler
                        onOrdering={(state) =>
                          onOrdering(
                            state,
                            "price_change_percentage_24h_in_currency"
                          )
                        }
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    <div className="flex justify-between items-center">
                      7d %
                      <ArrowOrderHandler
                        onOrdering={(state) =>
                          onOrdering(
                            state,
                            "price_change_percentage_7d_in_currency"
                          )
                        }
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    <div className="flex justify-between items-center">
                      Market cap
                      <ArrowOrderHandler
                        defaultValue={true}
                        onOrdering={(state) => onOrdering(state, "market_cap")}
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    <div className="flex justify-between items-center">
                      Circulating suppling
                      <ArrowOrderHandler
                        onOrdering={(state) =>
                          onOrdering(state, "total_supply")
                        }
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data
                  .filter((coin) => {
                    if (!value) return true;
                    if (coin.name.toLowerCase().includes(value)) {
                      return true;
                    }
                  })
                  .slice(currentPage * 20, 20 * (currentPage + 1))
                  .map((coin) => (
                    <tr key={coin.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {coin.market_cap_rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={coin.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {`${coin.name} ${
                                coin.symbol && coin.symbol.toUpperCase()
                              }`}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">
                          {`$${coin.current_price}`}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CoinWrapper>
                          {`${coin.price_change_percentage_24h_in_currency} %`}
                        </CoinWrapper>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <CoinWrapper>
                          {`${coin.price_change_percentage_7d_in_currency} %`}
                        </CoinWrapper>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {`$${coin.market_cap}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {`$${coin.total_supply ? coin.total_supply : 0}`}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
