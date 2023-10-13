'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import Logo from '@/component/assets/Images/Logo.png';
import Dropdown from './DropDown';
import SearchBar from './Search';

const Navbar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={Logo} alt="LogoImage" width={50} height={50} />
          <span className="ml-3 text-xl">DashBoard</span>
        </Link>
        <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:text-gray-900">
            <li>Main</li>
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            <li>Content</li>
          </Link>
          <Link href='#'>
            <Dropdown />
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            <li>About</li>
          </Link>
        </ul>
        <button
          onClick={toggleSearchBar}
          className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Search
          <BsArrowRightShort />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-12 transition-all duration-500 transform ${
          isSearchBarVisible ? 'translate-x-0 visible' : 'translate-x-full invisible'
        }`}
      >
        <SearchBar hideSearch={() => setIsSearchBarVisible(false)} />
      </div>
    </header>
  );
};

export default Navbar;
