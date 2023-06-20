import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ProjectsDropdown from '../ProjectsDropdown'
import { useState } from 'react'
import { styles } from '../../styles'
import ThemeSwitch from '../ThemeSwitch'

export default function Sidebar () {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
      <HamburgerButton handleSidebar={handleSidebar} />
      <aside id='sidebar' className={`flex flex-col fixed top-0 left-0 w-80 h-screen p-3 bg-white dark:bg-slate-900 ${styles.default_transition} ${!showSidebar && '-translate-x-full'}`}>
        <div className='flex justify-between items-center'>
          <h2 id='pageName' className='text-4xl text-black dark:text-white'>Spectrum</h2>
          <CloseSidebarButton handleSidebar={handleSidebar} />
        </div>
        <SidebarContent />
        <ThemeSwitch />
      </aside>
    </>

  )
}

function HamburgerButton({ handleSidebar }) {
  return (
    <button onClick={handleSidebar} type='button' id='hamburgerButton' className="flex justify-center items-center w-12 h-11 bg-indigo-600 rounded-xl">
      <Bars3Icon className='w-10 h-10 text-white' />
    </button>
  )
}

function CloseSidebarButton({ handleSidebar }) {
  return (
    <button onClick={handleSidebar} type='button' id='CloseSidebarButton' className="flex justify-center items-center w-9 h-9 bg-indigo-600 rounded-xl">
      <XMarkIcon className='w-8 h-9 text-white' />
    </button>
  )
}

function SidebarContent() {
  return (
    <div id='sidebarContent' className='flex flex-col w-full h-full mt-10 gap-4'>
      <ProjectsDropdown dropdownName={'Omar\'s projects'} />
      <ProjectsDropdown dropdownName={'Richard\'s projects'} />
    </div>
  )
}
