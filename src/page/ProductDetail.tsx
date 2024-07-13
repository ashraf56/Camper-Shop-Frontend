import { useParams } from "react-router-dom";
import productimg from '@/assets/shirsts.jpg'
import DetailproductBanner from "@/components/ProductsCompo/DetailproductBanner";
import { CheckIcon, MinusIcon, PlusIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductDetail = () => {
    const data = useParams()
    console.log(data);
    const [quantity, setquantity] = useState(0)



    return (
        <div className="font-CustomFont ">
            <DetailproductBanner />

            <div className=" w-full max-w-5xl my-10  flex container mx-auto justify-center items-center gap-2">
                {/* Product image */}
                <div>
                    <img src={productimg} className="w-full max-w-7xl" />
                </div>
                {/* product rest info */}
                <div className="px-2">
                    <p className="tracking-wide text-lg">Tents</p>
                    <h1 className="font-bold text-3xl pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, reprehenderit?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni nostrum doloremque sint incidunt, ratione aliquam quisquam dicta voluptas vel tempore ut similique praesentium et quo quis blanditiis? Magnam, alias.
                    </p>


                    <p className="flex gap-1 pt-2 ">
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <span>4.0</span>
                    </p>
                    <div className="flex justify-between items-center flex-row-reverse mt-5">
                        <div className=" flex items-center justify-end">
                            <Button size={'icon'} className="  w-5 h-5 rounded-full bg-green-500">
                                <CheckIcon className=" w-5 h-5  text-white" />

                            </Button>
                            <p className="ps-2 text-sm">100 items available</p>
                        </div>
                        <p className="text-3xl  "> $200.00 </p>
                    </div>



                    {/* cart quantity */}
                    <div className="p-4 pb-0">
                        <div className="flex items-center  justify-between ">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8  rounded-full"
                                onClick={() => setquantity(quantity - 1)}
                                disabled={quantity <= 0}
                            >
                                <MinusIcon className="h-4 w-4 text-black" />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    {quantity}
                                </div>
                                <div className="text-[0.70rem] uppercase text-muted-foreground">
                                    items
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => setquantity(quantity + 1)}
                                disabled={quantity >= 10}
                            >
                                <PlusIcon className="h-4 w-4 text-black" />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>

                    </div>

                    <div className="w-full mt-14">
                        <Button className="w-full">Add to cart</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetail;