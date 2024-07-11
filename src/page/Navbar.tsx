
 import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 absolute z-20">
            <Link to={'/'} className="mr-6 hidden lg:flex">
            
       <span className="">Acme Inc</span>
         
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Button size={"default"} className="bg-transparent">
        <Link to={'/'}
        >
          Home
        </Link>
        </Button>
        <Button size={"default"} className="bg-transparent">
        <Link to={'/about'}
        >
          about us
        </Link>
        </Button>
        <Button size={"default"} className="bg-transparent">
        <Link to={'/products'}
        >
          products
        </Link>
        </Button>
    
       
      </nav>
    </header>
  )
}



