
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/> 
      <About/>
      <Projects/>
    </div>
  );
}
