import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import DynamicQuery from './Components/DynamicQuery';
import Pagination from './Components/Pagination';
import InfinityQuery from './Components/InfinityQuery';
import Post from './Components/Post';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/dynamic" element={<DynamicQuery />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/infinity" element={<InfinityQuery />} />
            <Route path="/post" element={<Post />} />
         </Routes>
      </div>
   );
}

export default App;
