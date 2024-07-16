/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";


const ProductCard = ({ name, image, price, _id }: any) => {

    return (
        <div >
            <Card className=" w-full md:w-[350px] h-96   font-CustomFont relative">
                <CardHeader>
                    <div className="mx-auto">
                        <img src={image} alt="" className="min-h-full h-52 mb-2" />
                    </div>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>${price}</CardDescription>
                </CardHeader>
                <CardFooter className="flex absolute bottom-0">
                    <Button variant={'outline'}>
                        <Link to={`/products/${_id}`}>View Detail</Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default ProductCard;