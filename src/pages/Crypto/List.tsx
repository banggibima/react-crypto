import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import TableCrypto from '../../components/Table/Crypto';
import Footer from '../../components/Footer';

const CRYPTO_FEATURED =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=250&page=1&sparkline=false';

const CryptoList: FC = () => {
  const [cryptos, setCryptos] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Crypto';
    getCryptos();
  }, []);

  const getCryptos = async () => {
    try {
      await axios.get(`${CRYPTO_FEATURED}`).then((res) => setCryptos(res.data));
    } catch (err) {
      throw err;
    }
  };

  const currencyFormat = (currency: any) => {
    const format = currency.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');
    console.log(rupiah);
  };

  return (
    <>
      <Navbar />
      <Header title="Crypto List" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <TableCrypto cryptos={cryptos} currencyFormat={currencyFormat} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CryptoList;
