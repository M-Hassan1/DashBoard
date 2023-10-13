'use client'
import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { options } from '@/component/utils/arrays';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-center items-center mr-5 relative"
          id="options-menu"
          aria-haspopup="listbox"
        >
          <span className="">Role</span>
          < BiChevronDown
            className={`transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} />
        </button>
      </div>
      <div
        className={`absolute -left-6 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul role="listbox" aria-labelledby="options-menu" className="py-1">
          {options.map((option, index) => (
            <li
              key={index}
              className="text-gray-700 hover:bg-blue-400 cursor-pointer select-none relative py-2 p-2"
              onClick={() => {
                setIsOpen(false);
                console.log(`Selected: ${option}`);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
