import Categories from "./Categories";
import { Faq } from "./Faq";
import FeatureProducta from "./FeatureProducta";
import Hero from "./Hero";
import UniqueSection from "./UniqueSection";

const Home = () => {
    return (
        <div className=" w-full">
           <Hero></Hero>
           <Categories></Categories>
           <UniqueSection></UniqueSection>
           <FeatureProducta></FeatureProducta>
           <Faq/>



          
        </div>
    );
};

export default Home;