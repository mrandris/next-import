import Movie from "@/app/movie";

export default async function Movies() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`)
    const res = await data.json()

    return (
        <div className="container-fluid">
            <div className="row mx-5">
                {res.results.map(movie => (
                    <div className="col">
                        <Movie movie={movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}