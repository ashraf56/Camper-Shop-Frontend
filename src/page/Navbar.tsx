
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import logo from "@/assets/mountain.png"
import menu from "@/assets/menus.svg"
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useAppSelector } from "@/redux/hook";
const Navbar = () => {

const  totalcarts = useAppSelector((state)=> state.cartsState.carts)

    return (
        <header className="flex h-14 w-full shrink-0 items-center bg-transparent backdrop-blur-md px-4 md:px-6 absolute z-20 font-CustomFont">
            <Link to={'/'} className="mr-6 flex">
                <div className="flex flex-row items-center justify-center gap-2 ">
                    <div><img src={logo} width={30} height={30} /></div>
                    <p className="text-white font-CustomFont font-extrabold uppercase text-2xl tracking-widest">CampGear</p>
                </div>

            </Link>
            <nav className="ml-auto hidden lg:flex gap-6 text-white ">
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link to={'/'}
                    >
                        Home
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent"  >
                    <Link to={'/about'}
                    >
                        About us
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link to={'/products'}
                    >
                        ALL Products
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link to={'/productmanager'}
                    >
                        Products Management
                    </Link>
                </Button>



            </nav>
            <nav className="ml-auto hidden lg:flex justify-center ">
                <Button variant={'ghost'} size={"default"} className="bg-transparent hover:bg-transparent" >
                    <Link to={'/products'}
                    >
                        <div className="flex gap-2 text-white">
                        <ShoppingBagIcon className="h-5 w-5 text-white" />
                        <p>12</p>
                        </div>
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="bg-transparent hover:bg-transparent"  >
                    <Link to={'/carts'}
                    >
                        <div className="flex gap-2 text-white">
                        <ShoppingCartIcon className="w-5 h-5 text-white" />
                        <p>{totalcarts.length || 0}</p>
                        </div>
                    </Link>
                </Button>

            </nav>



            {/* this code   for mobile and tablet device */}
            <Sheet>
                <SheetTrigger asChild >
                    <Button variant="outline" className="block lg:hidden ml-auto">
                        <img src={menu} width={20} height={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <nav className="ml-auto flex flex-col gap-6 mt-5">
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/'}
                                    >
                                        Home
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/about'}
                                    >
                                        About us
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/products'}
                                    >
                                        ALL Products
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/productmanager'}
                                    >
                                        Products Management
                                    </Link>
                                </Button>



                            </nav>
                            <nav className="ml-auto flex flex-col gap-3">
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/products'}
                                    >
                                        <div className="flex gap-2">
                                        <ShoppingBagIcon className="h-5 w-5 text-black" />
                                            <p>12</p>
                                        </div>
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/carts'}
                                    >
                                        <div className="flex gap-2">
                                        <ShoppingCartIcon className="w-5 h-5 text-black" />
                                            <p>12</p>
                                        </div>
                                    </Link>
                                </Button>

                            </nav>
                        </SheetDescription>
                    </SheetHeader>

                </SheetContent>
            </Sheet>


        </header>
    )
}

export default Navbar

