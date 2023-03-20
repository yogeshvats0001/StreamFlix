import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      {/* Banner */}
      <Banner />
      <Row
        title="STREAMFLIX ORIGINALS" //StreamFlix
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //by default it would be true only.
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
