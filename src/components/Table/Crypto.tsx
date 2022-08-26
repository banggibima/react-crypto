import { FC } from 'react';

interface Props {
  [cryptos: string]: any;
  currencyFormat: (currency: any) => void;
}

const TableCrypto: FC<Props> = ({ cryptos, currencyFormat }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="md:mt-0 md:col-span-6">
          <div className="overflow-hidden overflow-x-auto border rounded">
            <table className="min-w-full divide-y">
              {cryptos.length > 0 ? (
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      Coin
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      24h
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      Volume
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium"
                    >
                      Market Cap
                    </th>
                  </tr>
                </thead>
              ) : (
                <></>
              )}
              <tbody className="divide-y">
                {cryptos.length > 0 ? (
                  cryptos.map((crypto: any) => (
                    <tr key={crypto.id}>
                      <td className="whitespace-nowrap px-4 py-2 text-sm">
                        {crypto.market_cap_rank}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-sm">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0">
                            <img
                              className="rounded-full"
                              src={crypto.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-2">{crypto.name}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-sm">
                        {crypto.current_price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td
                        className={`whitespace-nowrap px-4 py-2 text-sm ${
                          crypto.price_change_percentage_24h > 0
                            ? 'text-teal-600'
                            : 'text-rose-600'
                        }`}
                      >
                        {crypto.price_change_percentage_24h.toFixed(2)} %
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-sm">
                        {crypto.total_volume.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-sm">
                        {crypto.market_cap.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-700">
                      Empty expenses data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCrypto;
