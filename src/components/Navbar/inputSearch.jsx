'use client'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handlerSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault()
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
      const inputValidation = keyword === ''
      if (inputValidation) {
        router.push('/')
        alert('Please input anime title')
      }
    }
  }

  return (
    <div className='relative'>
      <input placeholder="Search Anime"
        className='p-2 rounded-2xl w-full'
        ref={searchRef}
        onKeyDown={handlerSearch}
      />
      <button className='absolute top-2 end-2' onClick={handlerSearch}>
          <MagnifyingGlass size={ 25 } className='z-50'/>
      </button>
    </div>
  )
}
export default InputSearch
