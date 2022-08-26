import { FC, useEffect } from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: FC = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <>
      <Navbar />
      <Header title="About" />
      <main>
        <div className="max-w-5xl mx-auto mb-8 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <p className="text-sm">
              These application are built using React with TypeScript
              programming language.
            </p>
            <div className="mt-2 text-sm">
              GitHub{' '}
              <a
                href="https://github.com/banggibima/react-crypto"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
