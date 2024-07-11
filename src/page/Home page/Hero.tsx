import imgs from '@/assets/hero1.jpg'
import Herocard from './Herocard';

const Hero = () => {
    return (
        <div className='w-full h-[90vh] flex flex-col relative items-center justify-center  ' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${imgs})`, backgroundSize:'cover', backgroundPosition:'bottom' }}>
         <div className='mb-9'>
            <p className='text-center text-lg font-light font-CustomFont text-white '> Explore </p>
           <h1 className='text-white font-bold font-CustomFont uppercase text-7xl text-center '>Camp gear</h1>
         </div>
           
           
<div className='absolute bottom-20'>
<Herocard></Herocard>

</div>


        </div>
    );
};

export default Hero;