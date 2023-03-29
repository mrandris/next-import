import Link from "next/link";
import Image from "next/image";

export default function Movie({movie}) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1>Title: {movie.title}</h1>
            <h2>Release date: {movie.release_date}</h2>
            <Link href={`/${movie.id}`}>
                <Image
                    src={imagePath + movie.poster_path}
                    width={300}
                    height={400}
                    alt=""
                />
            </Link>
        </div>
    )
}