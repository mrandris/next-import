import Movie from "@/app/movie";
import "bootstrap/dist/css/bootstrap.css";
import "./app.scss"
import FirstPage from "@/app/samplePage";
import Movies from "@/app/moviesSample";

export default async function Home() {
    return (
    <main className="App" data-bs-theme="light">
        <FirstPage/>
        <Movies />
    </main>
    )
}
