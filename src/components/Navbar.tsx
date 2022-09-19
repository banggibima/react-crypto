import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: FC = () => {
  const navigations = [
    { id: 1, name: 'About', to: '/' },
    { id: 2, name: 'Crypto', to: '/crypto' },
  ];

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="sm:pt-8 md:pt-8 lg:pt-8 max-w-7xl mx-auto">
              <div className="px-4 sm:px-0 md:px-4 lg:px-4">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="flex items-baseline space-x-2">
                        {navigations.map((navigation) => (
                          <NavLink
                            key={navigation.id}
                            to={navigation.to}
                            className={({ isActive }) =>
                              isActive
                                ? 'px-3 py-2 rounded-lg text-sm font-semibold shadow bg-sky-100 text-sky-600'
                                : 'px-3 py-2 rounded-lg text-sm font-semibold shadow bg-zinc-50 text-black hover:bg-sky-100 hover:text-sky-600'
                            }
                          >
                            {navigation.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 bg-sky-100 text-sky-600 rounded-lg shadow focus:outline-none focus:ring-transparent">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars4Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-4 pt-2 pb-3 sm:px-3">
                <div className="space-y-2">
                  {navigations.map((navigation) => (
                    <NavLink
                      key={navigation.name}
                      to={navigation.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-3 py-2 rounded-lg text-sm font-semibold shadow bg-sky-100 text-sky-600'
                          : 'block px-3 py-2 rounded-lg text-sm font-semibold shadow bg-zinc-50 text-black hover:bg-sky-100 hover:text-sky-600'
                      }
                    >
                      {navigation.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
