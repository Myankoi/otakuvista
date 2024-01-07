import { getAnimeResponse } from '@/app/libs/api-libs'
import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/header'

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeyword}`)

  return (
    <div className='px-10 py-5'>
      {/* anime populer */}
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </div>
  )
}

export default Page
