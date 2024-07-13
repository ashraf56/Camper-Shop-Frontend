import {
    Card,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import siteContent from "@/utills/siteContent";




const Herocard = () => {

    return (
        <div className="grid  gap-3 px-10 md:px-20  md:grid-cols-3 ">
           {
            siteContent.map(st=>(
                <Card className='bg-transparent backdrop-blur-2xl  w-full md:max-w-lg lg:max-w-2xl xl:max-w-full h-auto text-white font-CustomFont hover:backdrop-blur-none transition duration-500 ease-in-out transfor'>
                <CardHeader>
                    <CardTitle>
                       {st.title}
                    </CardTitle>
                    <CardDescription className="text-white font-light">{st.subtitle}</CardDescription>
                </CardHeader>
            </Card>
            ))
           }
        </div>
    );
};

export default Herocard;