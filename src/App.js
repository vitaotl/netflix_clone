import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import './App.css'

import MovieRow from './components/MovieRow'

function App() {
  const [movieList, setMovieList] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

    }
    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList?.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
