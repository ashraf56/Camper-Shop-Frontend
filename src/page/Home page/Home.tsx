import Categories from "./Categories";
import { Faq } from "./Faq";
import FeatureProducta from "./FeatureProducta";
import Hero from "./Hero";
import RecommendedProducts from "./RecommandedProducts";
import UniqueSection from "./UniqueSection";

const Home = () => {
    return (
        <div className=" w-full">
            <Hero></Hero>
            <FeatureProducta></FeatureProducta>
            <Categories></Categories>
            <UniqueSection></UniqueSection>
            <RecommendedProducts></RecommendedProducts>
            <Faq />




        </div>
    );
};

export default Home;