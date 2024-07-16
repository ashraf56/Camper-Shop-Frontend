/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { useGetproductsQuery } from '@/redux/feature/productApi';
import { Link } from 'react-router-dom';
const FeatureProducta = () => {
    const { data, isLoading } = useGetproductsQuery(undefined, { pollingInterval: 1000 })


    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div className='font-CustomFont w-full'>
            {  data?.data?.slice(0, 1)?.map((fp: any) => (
                <div className='  lg:flex p-5 my-5 justify-center items-center font-CustomFont w-full max-w-7xl mx-auto gap-4'>
                    <div className='text-center w-full lg:w-3/5'>
                        <p className='text-black text-xl uppercase font-light tracking-widest '>Feature PRoduct</p>
                        <h1 className='text-black text-lg  md:text-6xl text-center uppercase font-bold '>
                            {fp.name.slice(0, 21)}
                        </h1>
                        <p className='text-black text-4xl uppercase font-light'>
                            ${fp.price}
                        </p>
                    </div>
                    <div className=' w-full lg:w-3/5 mx-auto text-center  '>
                        <img src={fp.image} alt='feature' className=' w-full max-w-xl object-contain mx-auto  rounded-t-full h-[500px] xl: shadow-2xl ' />
                    </div>
                    <div className='text-center w-full  pt-5 lg:pt-0 lg:w-3/5'>
                        <h1 className='text-black text-lg uppercase font-bold'>
                            {fp.name}
                        </h1>
                        <p className='pt-2 text-black'>{fp.description}
                        </p>
                        <Button variant={'link'} size={'default'} className='font-bold text-sky-600'>
                            <Link to={`/products/${fp._id}`}>see more</Link>
                        </Button>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default FeatureProducta;