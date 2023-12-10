import Link from 'next/link'
import AnimeList from './components/Animelist'

const HOME = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()

  return (
    <div className='px-10 py-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl p-2 font-bold'>TOP ANIME</h1>
        <Link href='/populer' className='md:text-xl text-md underline :hover text-indigo-500 transition-all'>See More</Link>
      </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5'>
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className='shadow-xl'>
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HOME
