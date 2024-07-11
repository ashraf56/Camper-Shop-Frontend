
 import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import logo from "@/assets/mountain.png"

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 absolute z-20">
            <Link to={'/'} className="mr-6 hidden lg:flex">
      <div className="flex items-center justify-center gap-2">
      <div><img src={logo} width={40} height={40}/></div>
      <p className="text-black font-CustomFont font-extrabold uppercase text-2xl tracking-widest">CampGear</p>
      </div>
         
      </Link>
      <nav className="m-auto hidden lg:flex gap-6">
        <Button variant={'outline'} size={"default"} color="black" className="bg-transparent">
        <Link to={'/'}
        >
          Home
        </Link>
        </Button>
        <Button variant={'outline'} size={"default"} className="bg-transparent">
        <Link to={'/about'}
        >
          about us
        </Link>
        </Button>
        <Button variant={'outline'} size={"default"} className="bg-transparent">
        <Link to={'/products'}
        >
          products
        </Link>
        </Button>
        <Button  variant={'outline'} size={"default"} className="bg-transparent">
        <Link to={'/products'}
        >
          products
        </Link>
        </Button>
        <Button variant={'outline'} size={"default"} className="bg-transparent">
        <Link to={'/products'}
        >
          products
        </Link>
        </Button>
    
       
      </nav>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Button size={"default"} color="black" className="bg-transparent">
        <Link to={'/'}
        >
          Home
        </Link>
        </Button>
       
       
      </nav>

    </header>
  )
}



