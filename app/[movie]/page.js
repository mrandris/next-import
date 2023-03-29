import Image from "next/image";

export default async function MovieDetail({params}) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const {movie} = params // this has to be named like the folder

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.TMDB_KEY}`,
        {next: {revalidate:60}}
    )
    const res = await data.json()

    return (
        <div>
            <h1>Title: {res.title}</h1>
            <h3>Release date: {res.release_date}</h3>
            <h3>Runtime: {res.runtime} minutes</h3>
            <Image
                src={imagePath + res.poster_path}
                width={300}
                height={400}
                alt=""
            />
            <p>{res.overview}</p>
        </div>
    )
}
