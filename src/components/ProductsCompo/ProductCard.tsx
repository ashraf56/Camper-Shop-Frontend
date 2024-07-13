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


const ProductCard = ({ name, image, price,id }: any) => {

    return (
        <div >
            <Card className="w-[350px] h-96 max-w-xl font-CustomFont">
                <CardHeader>
                    <div className="mx-auto">
                        <img src={image} alt="" className="min-h-full h-52 mb-2" />
                    </div>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>${price}</CardDescription>
                </CardHeader>
                <CardFooter className="flex ">
                    <Button variant={'outline'}>
                        <Link to={`/products/${id}`}>View Detail</Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default ProductCard;