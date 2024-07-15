/* eslint-disable react-hooks/rules-of-hooks */
import HelperBanner from "@/components/ProductsCompo/HelperBanner";
import { CheckIcon, MinusIcon, PlusIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '@/redux/feature/productApi';
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addItemstoCart, decrement, increment } from "@/redux/feature/carts/cartSlice";
import { toast } from "sonner";
const ProductDetail = () => {
    const { id: slug } = useParams()
    const { data, isLoading } = useGetSingleProductQuery(slug as string)
    const items = useAppSelector((state) => state.cartsState.totalItem)

    const dispatch = useAppDispatch()
    if (isLoading) {
        return <p>Loading...</p>
    }
    
    type CartsInfo = {
        name: string
        price: number
        stockQuantity: number
        image: string
        category: string
        totalItem: number
    }
    const handleAddtocart = () => {

        const cartsInfo: CartsInfo = {
            name: data.data.name,
            price: data.data.price,
            stockQuantity: data.data.stockQuantity,
            image: data.data.image,
            category: data.data.category,
            totalItem: items!
        }

        dispatch(addItemstoCart(cartsInfo))
        toast.success('success')

    }


    return (
        <div className="font-CustomFont ">
            <HelperBanner />

            <div className=" w-full max-w-5xl my-10   lg:flex container mx-auto justify-center items-center gap-2">
                {/* Product image */}
                <div className='w-full'>
                    <img src={data.data.image} className="w-full max-w-7xl" />
                </div>
                {/* product rest info */}
                <div className="px-2 pt-4 lg:pt-0  w-full">
                    <p className="tracking-wide text-lg">{data.data.category}</p>
                    <h1 className="font-bold text-3xl pb-2">{data.data.name}</h1>
                    <p>
                        {data.data.description}
                    </p>


                    <p className="flex gap-1 pt-2 ">
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <span>{data.data.rating}</span>
                    </p>
                    <div className="flex justify-between items-center flex-row-reverse mt-5">
                        <div className=" flex items-center justify-end">
                            <Button size={'icon'} className="  w-5 h-5 rounded-full bg-green-500">
                                <CheckIcon className=" w-5 h-5  text-white" />

                            </Button>
                            <p className="ps-2 text-sm">{data.data.stockQuantity} items available</p>
                        </div>
                        <p className="text-3xl  "> ${data.data.price} </p>
                    </div>



                    {/* cart quantity */}
                    <div className="p-4 pb-0">
                        <div className="flex items-center  justify-between ">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8  rounded-full"
                                onClick={() => dispatch(decrement())}
                                disabled={items! <= 0}
                            >
                                <MinusIcon className="h-4 w-4 text-black" />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    {items}
                                </div>
                                <div className="text-[0.70rem] uppercase text-muted-foreground">
                                    items
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => dispatch(increment())}
                                disabled={items! >= data.data.stockQuantity}
                                className="h-8 w-8 shrink-0 rounded-full" >
                                <PlusIcon className="h-4 w-4 text-black" />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>

                    </div>

                    <div className="w-full mt-14">
                        <Button className="w-full" onClick={handleAddtocart}>Add to cart</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetail;