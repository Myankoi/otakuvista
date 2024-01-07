import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async({params: { id }}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return(
        <>
        <div className="px-10 py-5">
            <h1 className="text-color-primary text-2xl ">{anime.data.title} - {anime.data.year}</h1>
        </div>
        <div className="px-10 py-5 flex gap-5 text-center text-color-primary">
            <div className="flex-col w-30 justify-center align-middle items-center rounded border border-color-accent bg-color-accent p-2">
                <h3 className=" text-color-dark">RANK</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="flex-col w-30 justify-center align-middle items-center rounded border border-color-accent bg-color-accent p-2">
                <h3 className=" text-color-dark"s>SCORE</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="flex-col w-30 justify-center align-middle items-center rounded border border-color-accent bg-color-accent p-2">
                <h3 className=" text-color-dark">POPULARITY</h3>
                <p>{anime.data.popularity}</p>
            </div>
        </div>
        <div className="px-10 py-5 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350} height={300}
            className="rounded object-cover"
            />
            <p className="text-justify">{anime.data.synopsis}</p>
        </div>
        </>
    )
}
export default Page
