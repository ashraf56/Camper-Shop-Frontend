import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import profile from '@/assets/Teams.svg'


const team = [
  {
    name: "Alice Johnson",
    location: "New York, USA"
  },
  {
    name: "Bob Smith",
    location: "London, UK"
  },
  {
    name: "Carol Davis",
    location: "Sydney, Australia"
  },
  {
    name: "David Brown",
    location: "Toronto, Canada"
  },
  {
    name: "Eve White",
    location: "Berlin, Germany"
  },
  {
    name: "Frank Green",
    location: "Tokyo, Japan"
  }
];


const Ourteam = () => {
  return (
    <div className="container  font-CustomFont my-5 mx-auto">
      <h1 className="uppercase text-center  text-3xl font-bold ">Our Team</h1>
      <p className="text-center text-sm font-light uppercase tracking-[0.2em]">Meet our team</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-4 py-5">
        {
          team.map(t => (
            <Card className=' w-full md:max-w-lg lg:max-w-2xl  xl:max-w-full h-auto text-center'>

              <CardHeader>
                <Avatar className="w-full ">
                  <AvatarImage src={profile} className="mx-auto rounded-full w-24" alt="@shadcn" />
                </Avatar>
                <CardTitle>
                  {t.name}
                </CardTitle>
                <CardDescription>{t.location}</CardDescription>
              </CardHeader>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Ourteam;