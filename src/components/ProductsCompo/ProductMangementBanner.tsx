import imgs from '@/assets/randombanner2.jpg'

const ProductMangementBanner = () => {
    return (
        <div>
            <div className='w-full h-[50vh] flex flex-col relative items-center justify-center ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'center ', objectFit: 'contain' }}>
                <div className=' text-white'>

                    <h1 className='font-bold font-CustomFont uppercase text-3xl md:text-7xl text-center tracking-[0.2em]'>Product Manager</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductMangementBanner;