import Categories from "../components/HomepageCompo/Categories";
import { Faq } from "../components/HomepageCompo/Faq";
import FeatureProducta from "../components/HomepageCompo/FeatureProducta";
import Hero from "../components/HomepageCompo/Hero";
import RecommendedProducts from "../components/HomepageCompo/RecommandedProducts";
import UniqueSection from "../components/HomepageCompo/UniqueSection";

const Home = () => {
    return (
        <div className=" w-full">
            <Hero></Hero>
            <Categories></Categories>
            <FeatureProducta></FeatureProducta>
            <UniqueSection></UniqueSection>
            <RecommendedProducts></RecommendedProducts>
            <Faq />




        </div>
    );
};

export default Home;