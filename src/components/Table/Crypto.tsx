import { FC } from 'react';

type Props = {
  [key: string]: any;
  cryptos: any;
};

const TableCrypto: FC<Props> = ({ cryptos }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="md:mt-0 md:col-span-6">
          <div className="overflow-hidden overflow-x-auto shadow rounded-lg">
            <table className="min-w-full divide-y">
              <thead className="bg-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Coin
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Current Price
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    24h
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Volume
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-black"
                  >
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {cryptos.map((crypto: any) => (
                  <tr key={crypto.id}>
                    <td className="whitespace-nowrap px-4 py-2 pr-3 text-sm text-black font-medium">
                      {crypto.market_cap_rank}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 pr-3 text-sm text-black font-medium">
                      <div className="flex items-center">
                        <div className="h-6 w-6 mr-2 flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src={crypto.image}
                            alt=""
                          />
                        </div>
                        {crypto.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 pr-3 text-sm font-medium text-blacm">
                      {crypto.symbol.toUpperCase()}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-black">
                      {crypto.current_price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-2 text-sm font-medium ${
                        crypto.price_change_percentage_24h > 0
                          ? 'text-sky-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)} %
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-black">
                      {crypto.total_volume.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-black">
                      {crypto.market_cap.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCrypto;
