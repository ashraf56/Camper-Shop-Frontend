import imgs from '@/assets/unique.jpg'

const UniqueSection = () => {
    return (
        <div className='h-[550px] overflow-hidden'  style={{
            backgroundImage: `linear-gradient(to right, #111111 0%, rgba(17, 17, 17, 0) 100%),url(${imgs})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'

          }}>
          <div className=" w-full md:max-w-4xl p-16 gap-y-3 font-CustomFont  text-white flex  flex-col justify-center items-start ">
            <h1 className=" text-base md:text-5xl font-semibold  ">
            Discover the Best Camping Gear at Campers Shop

            </h1>
            <p className="text-base tracking-wider">
            At Campers Shop, we provide a wide range of camping essentials, from durable tents and cozy sleeping bags to high-quality cooking equipment and weather-appropriate clothing. Whether you're planning a solo adventure or a family trip, our products are designed to ensure comfort and convenience in the great outdoors. Our extensive collection caters to all your camping needs, making your experience seamless and enjoyable.
<br />
<br />
Explore our carefully curated selection and gear up for your next camping adventure. From reliable camping gear to comfortable clothing, Campers Shop has everything you need to make your outdoor journey memorable and fun. Dive into our collection and start planning your next great escape with confidence.
            </p>
           
          </div>
          
          </div>
    );
};

export default UniqueSection;