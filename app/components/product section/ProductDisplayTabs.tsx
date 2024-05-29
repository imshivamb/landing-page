import { Button } from "../Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  automation,
  campaigns,
  tabs3,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
} from "../../constants/imagesImport";
import Image from "next/image";
import {
  ArrowRight,
  Drum,
  EarthLock,
  Phone,
  Pyramid,
  Workflow,
} from "lucide-react";

const ProductDisplayTabs = () => {
  return (
    <div className="main-container w-full px-4 md:px-7 pt-8 pb-12 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 mb-6 py-3">
        <div className="float-left w-full max-w-3xl">
          <h2 className="text-4xl font-medium leading-none mb-4 md:leading-tight sm:text-4xl md:text-5xl">
            Built In Marketing Automation Tools. E-Commerce Marketing Simplified
          </h2>
        </div>
        <div className="w-full max-w-lg float-end flex flex-col gap-4 items-start justify-start">
          <p className="font-medium text-base leading-normal pt-5">
            Utilize our built-in marketing tools to streamline your e-commerce
            strategy. Simplify your marketing efforts and reach the right
            customers with ease.
          </p>
        </div>
      </div>
      <Tabs defaultValue="learning" className="w-full">
        <TabsList className="flex items-center justify-start md:gap-0  gap-4 overflow-hidden overflow-x-auto *:flex *:items-center *:gap-1 *:w-fit *:text-lg *:font-medium *:md:w-[20%] *:shrink-0 *:flex-nowrap">
          <TabsTrigger value="learning">
            <Workflow size={16} /> Automation
          </TabsTrigger>
          <TabsTrigger value="sales">
            <Pyramid size={16} />
            Marketing & SEO
          </TabsTrigger>
          <TabsTrigger value="security">
            <EarthLock size={16} />
            Information Security
          </TabsTrigger>
          <TabsTrigger value="marketing">
            <Drum size={16} />
            Marketing
          </TabsTrigger>
          <TabsTrigger value="customer">
            <Phone size={16} />
            Customer Service
          </TabsTrigger>
        </TabsList>
        <TabsContent value="learning">
          <div className="bg-indigo-100 p-10 w-full h-auto rounded-br-[70px] rounded-bl-lg rounded-t-lg">
            <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <h2 className=" text-2xl md:text-3xl font-semibold leading-normal">
                  Facebook and Instagram Automation
                </h2>
                <p className="text-base md:block hidden font-medium leading-[1.3]">
                  Automate your Facebook and Instagram activities with ease.
                  Schedule posts, manage brand pages, auto-reply to comments,
                  and capture leads for effective marketing.
                </p>
                <Button
                  icon={<ArrowRight size={18} />}
                  text="Learn More"
                  className="text-white flex gap-1.5 items-center bg-gray-800 !w-fit mt-5"
                ></Button>
              </div>
              <div className=" w-full md:w-[60%] h-auto">
                <Image
                  src={tab1}
                  alt="automation"
                  className=" rounded-br-[70px] rounded-bl-lg   w-full object-cover rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="sales">
          <div className="bg-indigo-100 p-10 w-full h-auto rounded-br-3xl rounded-bl-lg rounded-t-lg">
            <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <h2 className=" text-2xl md:text-3xl font-semibold leading-normal">
                  Content Marketing and SEO Tools
                </h2>
                <p className="text-base md:block hidden font-medium leading-[1.3]">
                  Grow your audience and boost traffic with built-in blogging
                  tools. Enhance visibility using SEO features to optimize title
                  tags, meta descriptions, and product details.
                </p>
                <Button
                  icon={<ArrowRight size={18} />}
                  text="Learn More"
                  className="text-white flex gap-1.5 items-center bg-gray-800 !w-fit mt-5"
                ></Button>
              </div>
              <div className=" w-full md:w-[60%] h-auto">
                <Image
                  src={tab2}
                  alt="automation"
                  className=" rounded-br-[70px] rounded-bl-lg   w-full object-cover rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="bg-indigo-100 p-10 w-full h-auto rounded-br-3xl rounded-bl-lg rounded-t-lg">
            <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <h2 className=" text-2xl md:text-3xl font-semibold leading-normal">
                  Integrated Messenger Chatbots
                </h2>
                <p className="text-base md:block hidden font-medium leading-[1.3]">
                  Leverage integrated messenger chatbots synced with your
                  e-commerce store to automate order processing and assist
                  customers. From product selection to checkout and invoicing,
                  everything happens seamlessly and automatically.
                </p>
                <Button
                  icon={<ArrowRight size={18} />}
                  text="Learn More"
                  className="text-white flex gap-1.5 items-center bg-gray-800 !w-fit mt-5"
                ></Button>
              </div>
              <div className=" w-full md:w-[60%] h-auto">
                <Image
                  src={tab3}
                  alt="automation"
                  className=" rounded-br-[70px] rounded-bl-lg  w-full object-cover rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="marketing">
          <div className="bg-indigo-100 p-10 w-full h-auto rounded-br-3xl rounded-bl-lg rounded-t-lg">
            <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <h2 className=" text-2xl md:text-3xl font-semibold leading-normal">
                  Email, SMS and Whatsapp Marketing
                </h2>
                <p className="text-base md:block hidden font-medium leading-[1.3]">
                  Boost your e-commerce store&apos;s performance with targeted
                  email/SMS marketing. Easily integrate third-party
                  autoresponders or use your own SMTP to launch effective email
                  campaigns. Use SMS, whatsapp marketing integration and promote
                  your online store
                </p>
                <Button
                  icon={<ArrowRight size={18} />}
                  text="Learn More"
                  className="text-white flex gap-1.5 items-center bg-gray-800 !w-fit mt-5"
                ></Button>
              </div>
              <div className=" w-full md:w-[60%] h-auto">
                <Image
                  src={tab4}
                  alt="automation"
                  className=" rounded-br-[70px] rounded-bl-lg   w-full object-cover rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="customer">
          <div className="bg-indigo-100 p-10 w-full h-auto rounded-br-3xl rounded-bl-lg rounded-t-lg">
            <div className="flex flex-col-reverse md:flex-row w-full gap-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                <h2 className=" text-2xl md:text-3xl font-semibold leading-normal">
                  Data-Driven Insights
                </h2>
                <p className="text-base md:block hidden font-medium leading-[1.3]">
                  Optimize your marketing strategy with actionable insights from
                  detailed analytics. Make informed business decisions and drive
                  growth with strategic marketing reports.
                </p>
                <Button
                  icon={<ArrowRight size={18} />}
                  text="Learn More"
                  className="text-white flex gap-1.5 items-center bg-gray-800 !w-fit mt-5"
                ></Button>
              </div>
              <div className=" w-full md:w-[60%] h-auto">
                <Image
                  src={tab5}
                  alt="automation"
                  className=" rounded-br-[70px] rounded-bl-lg   w-full object-cover rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDisplayTabs;
