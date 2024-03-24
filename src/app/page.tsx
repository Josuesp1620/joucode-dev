import { About } from "@/components/AboutComponent";
import { Navbar } from "@/components/NavbarComponent";
import { Header } from "@/components/HeaderComponent";
import { Projects } from "@/components/ProyectsComponent";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />      
      <Projects />      
      <About />
    </>
  );
};

export default Home;
