import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import MiddleBar from "../components/MiddleBar";
import NavigationBar from "../components/NavigationBar";
import Service from "../components/Service";

const Home = ()=>{
    return ( <div>
        <NavigationBar></NavigationBar>
        <Main></Main>
        <MiddleBar></MiddleBar>
        <About></About>
        <Service></Service>
        <Contact></Contact>

       
    </div>
    )
}

export default Home;