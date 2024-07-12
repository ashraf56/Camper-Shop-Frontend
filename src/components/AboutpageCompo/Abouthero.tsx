import imgs from '@/assets/abouthero.jpg'

const Abouthero = () => {
    return (
        <div className='w-full h-[50vh] flex flex-col relative items-center justify-center ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.1)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'contain' }}>
        <div className=' text-white'>
            {/* <p className='text-center text-lg font-light font-CustomFont tracking-[0.2em]'> Explore </p> */}
           
            <h1 className='font-bold font-CustomFont uppercase text-3xl md:text-7xl text-center tracking-[0.2em]'>About US</h1>

        </div>


    


    </div>
    );
};

export default Abouthero;