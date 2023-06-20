import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ProjectsDropdown({ data, dropdownName }) {
  const [show, setShow] = useState(false)

  return (
    <div id={`${dropdownName}-dropdown`} className="relative">

      <button type="button" className="flex justify-center items-center rounded-md bg-indigo-600 py-2 px-3 gap-x-1.5 text-sm font-semibold text-white" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setShow(!show)}>
        {dropdownName}
        <ChevronDoubleDownIcon className={`transition-all ease-in-out duration-300 ${show ? 'rotate-180' : 'rotate-0'} w-5 h-5 text-white`} />
      </button>

      {(data?.length && show) && (
        <div className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role="menu" aria-orientation="vertical" aria-labelledby="menu-list">
          {
            data?.length && data.map((item, index) => (
              <DropdownItem key={`${item?.name}-${index}`} item={item} index={index} />
            ))
          }
        </div>
      )}

    </div>
  )
}

function DropdownItem({ item, index }) {
  return (
    <div className="py-1 px-1">
      <a href={item?.link} className="transition ease-in-out duration-300 text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-slate-50 rounded-md" role="menu-item" id={`"menu-item-${index}`}>
        {item?.name}
      </a>
    </div>
  )
}