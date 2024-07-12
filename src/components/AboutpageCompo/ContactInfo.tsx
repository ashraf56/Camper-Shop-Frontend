import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { HomeIcon } from "@radix-ui/react-icons";

const contacts = [
    {
        id: 1,
        title: 'Adress',
        subtitle: '123 Adventure Lane, Outdoor City, ST 98765',
        icon: <HomeIcon className="h-10 w-10" />
    },
    {
        id: 2,
        title: 'Email',
        subtitle: 'abc@gmail.com',
        icon: <EnvelopeIcon className="h-10 w-10" />
    },
    {
        id: 3,
        title: 'Phone',
        subtitle: '(123) 456-7890',
        icon: <PhoneIcon className="h-10 w-10" />
    },
]


const ContactInfo = () => (
    <div className="container font-CustomFont  mx-auto my-10">

        <h1 className="uppercase text-center pb-2 text-3xl font-bold ">Get In touch</h1>

        {/* here is  google map */}
        <div className=" block lg:flex  font-CustomFont justify-center items-center mx-auto">
            <div className="py-5 mx-auto ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24704.361132112244!2d91.37934194401996!3d23.011826943803637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368113d3d5581%3A0x21618a32b8c76835!2sMohipal%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1720778444195!5m2!1sen!2sbd" className="  w-full lg:w-[600px] h-96 shadow-lg rounded-lg" style={{ border: "1" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="w-full lg:max-w-xl ">
                <div className="flex flex-col gap-0 justify-center items-center">
                    {
                        contacts.map(c => (
                            <Card className=' border-none shadow-none w-full md:max-w-lg lg:max-w-2xl xl:max-w-full h-auto  font-CustomFont '>
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex gap-3 ">
                                            <p className="bg-black text-white w-16 h-16 rounded-full flex justify-center items-center">
                                                {c.icon}</p>
                                            <div className="gap-0">
                                                <p className="text-lg font-bold">{c.title}</p>
                                                <span className="text-sm text-black">{c.subtitle}</span>
                                            </div>

                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
);

export default ContactInfo;