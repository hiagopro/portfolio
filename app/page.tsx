import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"; // Font Awesome
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Simple Icons
import Header from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
    </div>
  );
}
