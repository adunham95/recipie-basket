import { twMerge } from 'tailwind-merge';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { useState } from 'react';

interface ITypeAheadInputProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
  inputClassName?: string;
  ariaDescription?: string;
  options: { value: string; label: string; image?: string }[];
}

const TypeAheadInput = (props: ITypeAheadInputProps) => {
  const {
    className,
    onChange,
    id,
    name,
    type = 'text',
    placeholder = '',
    hasError = false,
    inputClassName = '',
    ariaDescription,
    value,
    options,
  } = props;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [text, setText] = useState('');

  function getValue(id: string) {
    console.log(id);
  }

  return (
    <InputWrapper {...props}>
      <div className="relative">
        <input
          id="combobox"
          type="text"
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          role="combobox"
          aria-controls="options"
          aria-expanded="false"
          onFocus={() => setOptionsOpen(true)}
          onBlur={() => setOptionsOpen(false)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
          onClick={() => setOptionsOpen(!optionsOpen)}
        >
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <ul
          className={twMerge(
            'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            optionsOpen ? 'block' : 'hidden',
          )}
          id="options"
          role="listbox"
        >
          {/* <!--
        Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
      --> */}
          {options
            .filter((opt) =>
              opt.label.toLowerCase().includes(text.toLowerCase()),
            )
            .map((opt) => (
              <li
                key={opt.value}
                className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                id="option-0"
                role="option"
                tabIndex={-1}
              >
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                  />
                  {/* <!-- Selected: "font-semibold" --> */}
                  <span className="ml-3 truncate">{opt.label}</span>
                </div>

                {/* <!--
          Checkmark, only display for selected option.

          Active: "text-white", Not Active: "text-indigo-600"
        --> */}
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            ))}

          {/* <!-- More items... --> */}
        </ul>
      </div>
    </InputWrapper>
  );
};

export default TypeAheadInput;
