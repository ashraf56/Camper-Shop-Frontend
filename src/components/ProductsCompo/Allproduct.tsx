
import imgs from '@/assets/abouthero.jpg'
import ProductCard from './ProductCard';
import { Input } from '../ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

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
    },
    {
        name: "Waterproof Hiking Backpack",
        price: 129.99,
        image: `${imgs}`
    },
    {
        name: "Waterproof Hiking Backpack",
        price: 129.99,
        image: `${imgs}`
    },
    {
        name: "Waterproof Hiking Backpack",
        price: 129.99,
        image: `${imgs}`
    },
    {
        name: "Waterproof Hiking Backpack",
        price: 129.99,
        image: `${imgs}`
    }
]

const Allproduct = () => {
    const [position, setPosition] = useState("lowtohigh")
    return (
        <div className='mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont'>
            <div>
                <h1 className="text-center uppercase font-CustomFont pb-1 text-3xl font-bold">ALl Products</h1>
                <p className="text-center text-sm font-light pb-5  uppercase tracking-[0.2em]">Top Picks for Your Outdoor Adventures</p>

            </div>
            <div className='flex flex-col my-5 w-full container gap-4'>
                <div className="flex w-full max-w-xl mx-auto items-center relative rounded-2xl ">
                    <Input type="search" placeholder="Search products" className=' ps-14 rounded-xl h-12 ' />
                    <Button variant={'ghost'} className='absolute left-0' ><MagnifyingGlassIcon className="h-6 w-6 text-black" />
                    </Button>
                </div>
                <div className=' flex justify-between gap-4 w-full'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='gap-2'>
                                <AdjustmentsHorizontalIcon className="h-6 w-6 text-black " />
                                Filter </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='gap-2'>Most relevant <ChevronDownIcon className="h-4 w-4 text-black" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="lowtohigh">Low to high</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="hightolow">High to low</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    bestsellings.map(b => (
                        <ProductCard {...b} />
                    ))
                }
            </div>
        </div>
    );
};

export default Allproduct;