import imgs from '@/assets/hero1.jpg'
import Herocard from './Herocard';

const Hero = () => {
    return (
        <div className='w-full h-[90vh] flex flex-col relative items-center justify-center ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'bottom' , objectFit:'contain'}}>
            <div className='mb-5 lg:mb-32'>
                <p className='text-center text-lg font-light font-CustomFont tracking-[0.2em]'> Explore </p>
                <h1 className='font-bold font-CustomFont uppercase text-3xl md:text-7xl text-center tracking-[0.2em]'>Campgear</h1>
            </div>


            <div className='  md:absolute  md:bottom-10 lg:bottom-20'>
                <Herocard></Herocard>

            </div>


        </div>
    );
};

export default Hero;