import Categories from "./Categories";
import { Faq } from "./Faq";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className=" w-full">
           <Hero></Hero>
           <Categories></Categories>
           <Faq/>


          
        </div>
    );
};

export default Home;