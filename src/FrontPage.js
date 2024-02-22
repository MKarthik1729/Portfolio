import Naving from './component/Naving'
import Home from './component/Home'
import Skills from './component/skills'
import './component/naving.css'
import Project from './component/projects'
import Footer from './component/footer'
import AboutMe from './component/aboutMe'
import { useRef } from 'react'
function FrontPage() {
  const target = useRef(null)
  const target1 = useRef(null)
  const target2 = useRef(null)
  const handlecli = () => {
    if (target.current) {
      target.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
  const handleclick = () => {
    if (target1.current) {
      target1.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
  return (
    <div className="App">
      <Naving func={handleclick} />
      <Home func={handlecli} />
      <AboutMe x={target} />
      <Skills />
      <Project x={target1} />

      <Footer x={target2} />
    </div>
  );
}

export default FrontPage;
