import HelperBanner from "@/components/ProductsCompo/HelperBanner";
import { ScrollArea } from "@radix-ui/react-scroll-area";





const Carts = () => {
    return (
        <div>
            <HelperBanner />
            <div>
                <ScrollArea className="h-72 w-48 rounded-md border">


                </ScrollArea>
            </div>
            <div>
                pay ment
            </div>
        </div>
    );
};

export default Carts;