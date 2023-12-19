import Link from 'next/link'

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl p-2 font-bold text-color-primary'>
          { title }
        </h1>
        {linkHref && linkTitle
          ? <Link href={linkHref} className='md:text-xl text-md underline text-color-primary hover:text-color-accent transition-all'>
            {linkTitle}
          </Link>
          : null
        }
    </div>
  )
}

export default Header
