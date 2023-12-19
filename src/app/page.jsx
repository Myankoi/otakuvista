import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/header'

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()

  return (
    <div className='px-10 py-5'>
      {/* anime populer */}
      <section>
        <Header title="TOP ANIME" linkHref="/populer" linkTitle="See More"/>
        <AnimeList api={topAnime}/>
      </section>
    </div>
  )
}

export default Page
