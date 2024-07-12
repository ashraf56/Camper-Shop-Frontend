import logo from '@/assets/mountain.png'

const Footer = () => {
    return (
        <footer >
            <div className="font-CustomFont  grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 bg-black text-white p-10 gap-5 mx-auto">
                <div>
                    <div><img src={logo} width={30} height={30} /></div>
                    <p className="text-white font-CustomFont font-extrabold uppercase text-2xl tracking-widest">CampGear</p>

                    <p className='text-sm pt-1'>Explore our carefully curated selection and gear up for your next camping adventure. Dive into our collection and start planning your next great escape with confidence.</p>
                </div>


                <div className="flex flex-col gap-y-4 mx-auto">
                    <h4 className="font-bold text-xl">Contact Us</h4>
                    <p className='text-sm'>Email: support@campersshop.com</p>
                    <p className='text-sm'>Phone: (123) 456-7890</p>
                    <p className='text-sm'>Address: 123 Adventure Lane, Outdoor City, ST 98765</p>

                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="font-bold text-xl">Customer Service</h4>
                    <p className='text-sm'>FAQ</p>
                    <p className='text-sm'>Shipping & Returns</p>
                    <p className='text-sm'>Privacy Policy</p>
                    <p className='text-sm'> Terms & Conditions</p>

                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="font-bold text-xl">Follow Us</h4>
                    <p className='text-sm'>Facebook</p>
                    <p className='text-sm' >Youtube</p>
                    <p className='text-sm'>Twiter</p>
                    <p className='text-sm'>Linkedin</p>
                </div>
            </div>
            <div className=' bg-black text-sm text-center justify-center mx-auto text-white font-CustomFont py-5'>
                <p>&copy; 2024 Campers Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;