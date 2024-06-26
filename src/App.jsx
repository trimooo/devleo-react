import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MovingDotsBackground from "./components/dots"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";



import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {

  return (
    <div className=''>
      <MovingDotsBackground />
      <Navbar />
      <ThemeToggle />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

