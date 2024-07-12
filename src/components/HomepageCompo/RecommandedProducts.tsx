/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductsCompo/ProductCard";
import imgs from "@/assets/tents.jpg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const bestsellings = [
    {
        name: "Deluxe Camping Tent",
        price: 199.99,
        image: `${imgs}`
    },
    {
        name: "Portable Camping Stove",
        price: 89.99,
        image: `${imgs}`
    },
    {
        name: "Waterproof Hiking Backpack",
        price: 129.99,
        image: `${imgs}`
    }
]


const RecommendedProducts = () => {
    return (
        <div className="my-10  flex flex-col  mx-auto font-CustomFont">
            <div>
                <h1 className="text-center font-CustomFont text-3xl py-5 font-bold">Recommended Products</h1>
            </div>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-5">
                {
                    bestsellings?.map((b: any) => (
                        <ProductCard {...b} ></ProductCard>
                    ))
                }
            </div>

            <div className="mt-4 text-center">
                <Button variant={'default'} >
                    <Link to={'/products'}>View all</Link>
                </Button>
            </div>

        </div>
    );
};

export default RecommendedProducts;