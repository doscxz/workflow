import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface NavigationBarProps {
  children: React.PropsWithChildren<React.ReactNode>
  className?: string
}
const labelPath = [
  {
    label: 'Main',
    path: '/main'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'LK',
    path: '/user'
  }
]
const NavigationBar: FC<NavigationBarProps> = ({ className, children }) => {
  const pathname = useRouter().pathname

  return (
    <div className={`${className} flex gap-2`}>
      {!pathname.startsWith('/main') &&
        <div className='pt-24 p-3.5 flex flex-col gap-2 w-[285px] font-bold text-2xl border-r-2 border-gray-600 h-[100vh]  text-center'
        >
          {
            labelPath.map(index => {
              return (
                <Link href={`${index.path}`} key={index.label} className={`hover:bg-[#000] text-xl hover:text-pink-800`}>
                  {index.label}
                </Link>
              )
            })
          }
        </div>}
      {children}
    </div>
  )
}
export default NavigationBar
