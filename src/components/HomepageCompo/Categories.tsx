
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { categoryData } from '@/utills/categories';




const Categories = () => {
    return (
        <div className='mx-10 py-10 '>

            <h1 className="text-center font-CustomFont text-3xl py-2 font-bold uppercase">Product Categories</h1>
            <p className="text-center text-sm font-light pb-2  uppercase tracking-[0.2em]">View top Categories</p>

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