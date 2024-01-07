import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/header'
import { getAnimeResponse } from './libs/api-libs'

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=10')

  return (
    <>
      {/* anime populer */}
      <section>
        <Header title="TOP ANIME" linkHref="/populer" linkTitle="See More"/>
        <AnimeList api={topAnime}/>
      </section>
    </>
  )
}

export default Page
