import feature from '@/assets/FeatureProduct.jpg'
const FeatureProducta = () => {
    return ( 
        <div className='  lg:flex p-5 my-5 justify-center items-center font-CustomFont w-full max-w-7xl mx-auto '>
            <div className='text-center w-full lg:w-3/5'>
                <p className='text-black text-xl uppercase font-light tracking-widest '>Feature PRoducts</p>
                <h1 className='text-black text-lg  md:text-7xl text-center uppercase font-bold '>
                Hiking Backpack 
                </h1>
                <p className='text-black text-4xl uppercase font-light'>
                    $100
                </p>
            </div>
            <div className=' w-full lg:w-3/5 mx-auto text-center  '>
                <img src={feature} alt='feature' className=' max-w-full mx-auto  rounded-t-full h-[500px] xl: shadow-2xl  lg:hover:drop-shadow-2xl ' />
            </div>
            <div className='text-center w-full  pt-5 lg:pt-0 lg:w-3/5'>
            <h1 className='text-black text-lg uppercase font-bold'>
            Hiking Backpack 16 L - NH Escape 100 Square
                </h1>
                <p className='pt-2 text-black'>Our motivation? To offer you a comfortable and accessorised bag to make the most of your hikes. Its 11 pockets will guarantee you a good organization of your things for your daily life
                </p>
            </div>
        </div>
    );
};

export default FeatureProducta;