/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { MinusIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { decrementItem, incrementItem } from '@/redux/feature/carts/cartSlice';



const AllCart = ({ carts, dispatch }: any) => {
    return (
        <div className="scrollbar scrollbar-thin h-80 overflow-y-scroll">
            <div className='w-full grid gap-3 '>
                {
                    carts?.map((bs: any) => (

                        <Card className=' container flex relative w-full gap-0 items-center md:max-w-lg lg:max-w-2xl xl:max-w-full h-autofont-CustomFont'>
                            <Avatar>
                                <AvatarImage src={bs.image} className='w-24 h-24 rounded-lg'></AvatarImage>
                            </Avatar>
                            <CardHeader>
                                <CardTitle>
                                    {bs.name}
                                </CardTitle>
                                <CardDescription className=" font-light">$ {bs.price}</CardDescription>
                                <CardContent>
                                    <div className="">
                                        <div className="flex items-center absolute gap-3 left-36 justify-between ">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-6 w-6  rounded-full"
                                                onClick={() => dispatch(decrementItem(bs.id))}
                                            >
                                                <MinusIcon className="h-4 w-4 text-black" />
                                                <span className="sr-only">Decrease</span>
                                            </Button>
                                            <div className="text-center">
                                                <div className="text-md font-bold tracking-tighter">
                                                    {bs.cartQuantity}
                                                </div>

                                            </div>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-6 w-6 shrink-0 rounded-full"
                                                onClick={() => dispatch(incrementItem(bs.id))}
                                            >
                                                <PlusIcon className="h-4 w-4 text-black" />
                                                <span className="sr-only">Increase</span>
                                            </Button>
                                        </div>

                                    </div>
                                </CardContent>
                            </CardHeader>
                            <CardFooter className='items-center bottom-6 absolute right-2'>
                                <Button size={'icon'}><TrashIcon className="h-6 w-6 text-white" />
                                </Button>
                            </CardFooter>

                        </Card>
                    ))
                }
            </div> </div>
    );
};

export default AllCart;