import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useSetTheme from '../../hooks/useSetTheme'
import { styles } from '../../styles'

export default function ThemeSwitch({ containerStyles }) {
  const { handleThemeChange } = useSetTheme()

  return (
    <div id='themeSwitchContainer' className={`flex flex-row items-center gap-2 ${containerStyles}`}>
      <SunIcon className={`w-9 h-9 ${styles.default_transition} text-green-500 dark:text-slate-400 dark:scale-75`} />
      <button id='themeSwitch' onClick={handleThemeChange} className={`w-16 h-7 rounded-full py-[2px] px-[2px] ${styles.default_transition} bg-green-500 dark:bg-indigo-600`}>
        <div className='w-6 h-6 rounded-full transition ease-linear duration-200 bg-white dark:translate-x-[35px]' />
      </button>
      <MoonIcon className={`w-8 h-8 ${styles.default_transition} scale-75 text-slate-400 dark:text-indigo-600 dark:scale-100`} />
    </div>
  )
}