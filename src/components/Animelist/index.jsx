import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
      {api.data.map((anime, index) => {
        return (
          <Link href={`/${anime.mal_id}`} key={index} className='text-color-primary hover:text-color-accent transition-all'>
            <Image src={anime.images.webp.image_url}
              alt="..." width={350} height={300}
              className='w-full lg:max-h-96 md:max-h-64 sm:max-h-60 object-cover'
            />
            <h3 className='font-bold md:text-xl text-md p-2'>{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList
