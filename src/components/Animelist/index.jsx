import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 px-10'>
      {api.data?.map((anime, index) => {
        return (
          <div className='bg-color-accent p-2 rounded-2xl shadow-lg'>
          <Link href={`/anime/${anime.mal_id}`} key={index} className='text-color-primary hover:text-color-secondary transition-all'>
            <Image src={anime.images.webp.image_url}
              alt="..." width={300} height={250}
              className='w-full lg:max-h-96 md:max-h-64 sm:max-h-60 object-cover rounded-2xl'
            />
            <h3 className='font-bold md:text-xl text-md p-2'>{anime.title}</h3>
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default AnimeList
