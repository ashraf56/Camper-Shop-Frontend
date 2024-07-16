
import mission from '@/assets/mission.svg'

const Ourmission = () => {
    return (
        <div className=" font-CustomFont" >
            <h1 className="uppercase text-center text-3xl font-bold ">Our Mission</h1>
            <p className="text-center text-sm font-light pb-2  uppercase tracking-[0.2em]">Mission Statement</p>

            <div className='block lg:flex justify-center items-center mx-auto gap-0.5 w-full lg:max-w-full'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-xl font-bold pb-2'>Campers Shop Mission Statement</h3>
                    <p>
                        At Campers Shop, our mission is to inspire and equip camping enthusiasts of all ages and experience levels with the highest quality gear, innovative products, and expert advice. We are dedicated to fostering a love for the great outdoors by offering a curated selection of essentials and unique finds that enhance every camping adventure. Our commitment is to provide exceptional customer service, promote sustainable practices, and build a community that shares our passion for nature and exploration. Whether you're embarking on your first camping trip or your hundredth, Campers Shop is your trusted partner in creating memorable outdoor experiences.
                    </p>
                </div>
                <div>
                    <img src={mission} alt="mission" className='w-96 h-96' />
                </div>
            </div>
        </div>
    );
};

export default Ourmission;