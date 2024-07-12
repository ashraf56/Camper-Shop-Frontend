
import tent from '@/assets/tents.jpg'
import bag from '@/assets/bagpack.jpg'
import outdoor from '@/assets/outdoor.jpg'
import sleepingbag from '@/assets/sleepingbag.jpg'
import health from '@/assets/health&safe.jpg'
import footware from '@/assets/footware.jpg'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'


const categoryData = [
    {
        id: "cat-1",
        name: "Tents",
        imageUrl: `${tent}`
    },
    {
        id: "cat-2",
        name: "Sleeping Bags",
        imageUrl: `${sleepingbag}`
    },
    {
        id: "cat-3",
        name: "Backpacks",
        imageUrl: `${bag}`
    },
    {
        id: "cat-4",
        name: "Footwear",
        imageUrl: `${footware}`
    },
    {
        id: "cat-5",
        name: "Health & Safety",
        imageUrl: `${health}`
    },
    {
        id: "cat-9",
        name: "Outdoor Furniture",
        imageUrl: `${outdoor}`
    }
];



const Categories = () => {
    return (
        <div className='mx-10 py-10 '>

            <h1 className="text-center font-CustomFont text-3xl py-2 font-bold uppercase">Product Categories</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-2 p-9 m-auto'>


                {
                    categoryData.map(c => (
                        <Card className="w-full  " key={c.id}>
                            <div className=' overflow-hidden  h-[400px] md:h-[500px]  '  >
                                <img src={`${c.imageUrl}`} width={600} className='  min-h-full  transition duration-500 ease-in-out  hover:scale-125' alt="imgs" />
                            </div>

                            <CardHeader>
                                <CardTitle className='font-bold text-center font-CustomFont'>{c.name}</CardTitle>
                            </CardHeader>

                        </Card>
                    ))
                }</div>
        </div>
    );
};

export default Categories;