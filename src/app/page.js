import { Header, SocialIcons } from "./components";
import Image from "next/image";
import {
  HTML_Svg,
  CSS_Svg,
  Tailwind_Svg,
  JS_Svg,
  JQuery_Svg,
  ReactJS_Svg,
  PHP_Svg,
  MySQL_Svg,
  REST_Svg,
  GraphQL_Svg,
  Laravel_Svg,
  Magento2_Svg,
  Shopify_Svg,
} from "./components/svg-icons";

const CapsuleCard = ({ Icon, title }) => {
  return (
    <div className="bg-[#58117b] flex items-center justify-between border-[1px] border-[#58117b] rounded-full">
      <div className="w-fit">
        <div
          data-node="HTML"
          className="bg-[#0d0029]/90 rounded-full w-20 h-20 p-3"
        >
          <Icon />
        </div>
      </div>
      <div className="w-full ml-10">
        <span className="font-extrabold text-md text-slate-200">{title}</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-[#0d0029] to-[#3d0658] min-h-screen flex-col items-center justify-center p-12">
        <section className="mt-20 relative">
          <div className="absolute z-0 left-1/2 -top-6 transform -translate-x-1/2 -translate-y-7">
            <h1 className="text-[calc(100vw-75vw)] text-center text-nowrap p-4 px-8 rounded-full font-extrabold main-img-animation">
              <span className="text-[#0d0029]">Hi</span>
            </h1>
          </div>
          <div className="absolute z-0 left-1/2 top-40 transform -translate-x-1/2 -translate-y-7">
            <h1 className="text-[calc(100vw-95vw)] text-center text-nowrap p-4 px-8 text-shadow rounded-full font-extrabold">
              <span className="text-[#0d0029]">I am a </span>Full Stack Web
              Developer
            </h1>
          </div>
          <div className="p-4 flex justify-center items-center relative z-10 main-img-animation">
            <div className="border-b-2 border-[#58117b] p-7 rounded-full">
              <Image
                src="/portfolio/images/home-banner-img.png"
                alt="G"
                width={440}
                height={440}
                priority
              />
            </div>
          </div>
        </section>
        <section className="mt-20">
          <figure className="rounded-full bg-gradient-to-l from-[#1b0a3f] to-[#2a043d] flex items-center justify-center group transition-all shadow-lg border-2 border-[#58117b]">
            <figcaption className="flex items-center w-1/4 justify-center">
              <Image
                src="/portfolio/images/me.jpeg"
                alt="G"
                width={440}
                height={440}
                className="flex-none rounded-full shadow-lg object-cover group-hover:grayscale transition-all"
                priority
              />
            </figcaption>
            <blockquote className="flex flex-col p-8 px-16 rounded-full gap-3 w-3/4 ">
              <h3 className="font-bold text-[28px] bg-gradient-to-r from-[#991598] via-[#ac4222] to-[#0e002a] bg-clip-text text-transparent">
                Gobinath Murugesan
              </h3>
              <p className="text-sm text-slate-400">
                Highly skilled and experienced e-commerce web developer with
                over two years of expertise in building and customizing
                high-performing online stores using Shopify, Magento 2, and
                Laravel frameworks. Adept at transforming client visions into
                functional, user-friendly storefronts that boost conversions and
                sales. Specializes in Liquid templating, Shopify theme and app
                development, Magento 2 extension development, GraphQL and REST
                API integrations, Magento 2 store migrations, and optimizing for
                SEO and mobile responsiveness
              </p>
            </blockquote>
          </figure>
        </section>
        <section className="mt-20 grid grid-cols-3 gap-20">
          <div className="col-span-1 p-7 bg-gradient-to-l from-[#1b0a3f] to-[#2a043d] border-2 border-[#58117b] rounded-[80px]">
            <h3 className="font-bold text-[20px] bg-gradient-to-r from-[#991598] to-[#ac4222] bg-clip-text text-transparent text-center border-b-[1px] border-[#58117b] pb-7">
              Work Experience
            </h3>
            <div className="w-full bg-[#58117b] p-4 mt-10 rounded-3xl">
              <div className="flex gap-2">
                <Image
                  src="/portfolio/images/ewall-logo.jpg"
                  alt="G"
                  width={70}
                  height={30}
                  className="flex shadow-lg object-contain"
                  priority
                />
                <div className="flex flex-col justify-between">
                  <div className="text-slate-200 font-bold text-[11.7px]">
                    EWall Solutions PVT LTD
                  </div>
                  <div className="text-slate-400 text-[10.7px]">
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
              <div className="bg-[#0d0029]/90 flex flex-col gap-2 p-4 pl-5 mt-4 rounded-3xl">
                <div className="flex flex-col">
                  <div className="text-slate-200 font-bold text-[11.7px] leading-4">
                    Programmer
                  </div>
                  <div className="text-slate-400 text-[10.7px]">
                    Jul 2023 - Present
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-slate-200 font-bold text-[11.7px] leading-4">
                    Junior Programmer
                  </div>
                  <div className="text-slate-400 text-[10.7px]">
                    March 2022 - Jul 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 p-7 bg-gradient-to-l from-[#1b0a3f] to-[#2a043d] border-2 border-[#58117b] rounded-[80px]">
            <h3 className="font-bold text-[20px] bg-gradient-to-r from-[#991598] to-[#ac4222] bg-clip-text text-transparent text-center border-b-[1px] border-[#58117b] pb-7">
              Skills
            </h3>
            <div className="mt-5">
              <div>
                <h3 className="text-slate-400 font-bold text-md leading-4">
                  Frontend
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <CapsuleCard Icon={HTML_Svg} title="HTML5" />
                  <CapsuleCard Icon={CSS_Svg} title="CSS3" />
                  <CapsuleCard Icon={Tailwind_Svg} title="Tailwind" />
                  <CapsuleCard Icon={JS_Svg} title="Java Script" />
                  <CapsuleCard Icon={JQuery_Svg} title="JQuery" />
                  <CapsuleCard Icon={ReactJS_Svg} title="React JS" />
                </div>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold text-md leading-4">
                  Backend
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <CapsuleCard Icon={PHP_Svg} title="PHP" />
                  <CapsuleCard Icon={MySQL_Svg} title="MySQL" />
                </div>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold text-md leading-4">
                  API Architectures
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <CapsuleCard Icon={REST_Svg} title="REST" />
                  <CapsuleCard Icon={GraphQL_Svg} title="GraphQL" />
                </div>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold text-md leading-4">
                  Frameworks
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <CapsuleCard Icon={Magento2_Svg} title="Magento 2" />
                  <CapsuleCard Icon={Laravel_Svg} title="Laravel" />
                  <CapsuleCard Icon={Shopify_Svg} title="Shopify" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SocialIcons />
    </>
  );
}
