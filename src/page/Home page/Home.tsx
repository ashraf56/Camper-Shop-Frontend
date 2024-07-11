import Categories from "./Categories";
import { Faq } from "./Faq";
import Hero from "./Hero";
import UniqueSection from "./UniqueSection";

const Home = () => {
    return (
        <div className=" w-full">
           <Hero></Hero>
           <Categories></Categories>
           <UniqueSection></UniqueSection>
           <Faq/>



          
        </div>
    );
};

export default Home;