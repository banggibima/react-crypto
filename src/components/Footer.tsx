import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="sm:pb-8 md:pb-8 lg:pb-8 max-w-7xl mx-auto">
          <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
            <div className="text-xs text-black">
              Copyright &copy; {currentYear}
              <a
                href="https://bbima.ml"
                className="ml-1 hover:text-sky-600"
                target="_blank"
                rel="noreferrer"
              >
                Banggi Bima
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
