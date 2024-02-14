import Naving from './component/Naving'
import Home from './component/Home'
import Skills from './component/skills'
import './component/naving.css'
import Project from './component/projects'
import Footer from './component/footer'
import AboutMe from './component/aboutMe'
import { useRef } from 'react'
function App() {
  const target = useRef(null)
  const handleclick = () => {
    target.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div className="App">
      <Naving func={handleclick} />
      <Home func={handleclick} />
      <AboutMe x={target} />
      <Skills />
      <Project x={target}/>
      <Footer x={target} />
    </div>
  );
}

export default App;
