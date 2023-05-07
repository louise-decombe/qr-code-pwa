import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="text-white text-xl font-semibold">Application Qr Code</div>
        <button
          type="button"
          className="text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                className="fill-current"
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                className="fill-current"
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:items-center sm:w-auto`}
      >
        <ul className="sm:flex">
          <li>
            <a
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded sm:p-0 sm:ml-2"
              href="#"
            >
              QR Code
            </a>
          </li>
          <li>
            <a
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded sm:p-0 sm:ml-2"
              href="#"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded sm:p-0 sm:ml-2"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
