import imgs from '@/assets/abouthero.jpg'

const Productbanner = () => {
    return (
        <div>
            <div className='w-full h-[50vh] flex flex-col relative items-center justify-center ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.1)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'top', objectFit: 'contain' }}>
                <div className=' text-white'>

                    <h1 className='font-bold font-CustomFont uppercase text-3xl md:text-7xl text-center tracking-[0.2em]'>Our Product</h1>
                </div>
            </div>
        </div>
    );
};

export default Productbanner;