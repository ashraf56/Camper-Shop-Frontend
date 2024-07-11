import {
    Card,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import siteContent from "@/utills/siteContent";




const Herocard = () => {

    return (
        <div className="grid  gap-3 px-20  lg:grid-cols-3 ">
           {
            siteContent.map(st=>(
                <Card className='bg-transparent backdrop-blur-md  w-full max-w-2xl h-auto text-white font-CustomFont'>
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