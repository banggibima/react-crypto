import { FC, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: FC = () => {
  useEffect(() => {
    document.title = 'About';
  });

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Header title="About" />
        <main>
          <div className="max-w-7xl mx-auto">
            <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
              <p className="text-sm">
                These application are built using React with TypeScript
                programming language. GitHub{' '}
                <a
                  href="https://github.com/banggibima/react-crypto"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600"
                >
                  Source Code
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
