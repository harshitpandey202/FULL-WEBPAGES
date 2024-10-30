import { Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Newsletter from './Newsletter';
import Support from './Support';
import Campaign from "./Campaign";
import Blogpage from './Blogpage';
import Morepage from "./Morepage";
import Aboutus from "./Aboutus";
import Whatwedo from "./Whatwedo";
import Sponsor from "./Sponsor";
import Donate from "./Donate";
import Foster from "./Foster";
import Adopt from "./Adopt"
import ScrollToTop from './ScrollToTop';
// Home component to render main content
function Home() {
  return (
    <>
      <About />
      <Newsletter />
      <Support />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop/>
      <Hero /> {/* Move Hero outside of Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/support" element={<Support />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/more" element={<Morepage/>}/>
        <Route path="/adopt" element={<Adopt/>}/>
        <Route path="/join-us" element={<Newsletter/>}/>
        <Route path="/whatwe" element={<Aboutus/>}/>
        <Route path="/whatdo" element={<Whatwedo/>}/>
        <Route path="/foster" element={<Foster/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/sponsor" element={<Sponsor/>}/>


      </Routes>
      <Footer /> {/* Footer should be outside Routes */}
    </>
  );
}

export default App;
