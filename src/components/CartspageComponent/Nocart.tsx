import imgs from '@/assets/noshoppingcart.png'
const Nocart = () => {
    return (
        <div className="mx-auto my-10 ">
            <div className='flex flex-col justify-center items-center py-10  gap-4'>
                <img src={imgs} className='w-24 h-24' />
                <h1 className="text-center uppercase font-CustomFont pb-1 text-xl tracking-widest font-semi">No cart available</h1>
            </div>

        </div>
    );
};

export default Nocart;