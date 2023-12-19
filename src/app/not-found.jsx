'use client'

import { FileSearch } from '@phosphor-icons/react/dist/ssr'

const Page = () => {
  return (
    <div className='min-h-screen mx-auto max-w-xl flex justify-center items-center'>
        <div className='flex gap-4 justify-center items-center'>
            <FileSearch size={42} className='text-color-accent'/>
            <h1 className='text-3xl text-color-accent'>NOT FOUND</h1>
        </div>
    </div>
  )
}

export default Page
