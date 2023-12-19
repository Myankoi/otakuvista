import Link from 'next/link'
import InputSearch from './inputSearch'

const Navbar = () => {
  return (
        <header className='bg-color-accent'>
            <div className='flex md:flex-row flex-col justify-between md:items-center px-10 py-5 gap-2'>
                <Link href='/' className='font-bold text-color-dark text-3xl'>OTAKUVISTA</Link>
                <InputSearch/>
            </div>
        </header>
  )
}

export default Navbar
