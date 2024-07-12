import Categories from "../../components/HomepageCompo/Categories";
import { Faq } from "../../components/HomepageCompo/Faq";
import FeatureProducta from "../../components/HomepageCompo/FeatureProducta";
import Hero from "../../components/HomepageCompo/Hero";
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