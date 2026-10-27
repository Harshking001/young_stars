import { Link, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar/Navbar"
import ExplorePage from "./pages/ExplorePage"
import NewsPage from "./pages/NewsPage"

const App = () => {
  
  return (
    <Routes>   
      <Route path="" element={<Navbar />}>
          <Route path="/young_stars" exact element={<Homepage />} />
          <Route path="/young_stars/explore" element={<ExplorePage />}/>
          <Route path="/young_stars/news" element={<NewsPage />}/>
      </Route>
      <Route path="*" element={<div><h1>404 Page not found</h1><Link to="/">Back Home</Link></div>} />
    </Routes>
  )
}

export default App
