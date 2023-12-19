import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/header'

const Page = async ({ params }) => {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <div className='px-10 py-5'>
      {/* anime populer */}
      <section>
        <Header title={`Pencarian untuk ${keyword}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </div>
  )
}

export default Page
