import imgs from '@/assets/hero.jpg'
const Hero = () => {
    return (
        <div className='w-full h-[90vh] ' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${imgs})`, backgroundSize:'cover', }}>
            <p className='text-center text-lg font-light text-white'> Explore </p>
            <h1 className='text-white font-bold uppercase text-7xl text-center '>Camp gear</h1>
        </div>
    );
};

export default Hero;