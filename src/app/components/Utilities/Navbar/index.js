import Link from 'next/link'

const Navbar = () => {
  return (
        <header className='bg-yellow-500'>
            <div className='flex md:flex-row flex-col justify-between px-10 py-5 gap-2'>
                <Link href='/' className='font-bold text-white text-3xl'>OTAKUVISTA</Link>
                <input placeholder='Search anime ...' className=''/>
            </div>
        </header>
  )
}

export default Navbar
