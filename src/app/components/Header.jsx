import Image from "next/image";
import { GitHub_Svg } from "./svg-icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed z-50 top-8 left-8 right-8">
      <div className="bg-gradient-radial border-2 border-[#3d0658] from-[#0d0029] to-[#3d0658] p-2 rounded-xl">
        <Image
          src="/portfolio/images/main-logo.png"
          alt="G"
          width={40}
          height={40}
          priority
        />
      </div>
      <div className="border-[5px] border-[#58117b] p-4 px-8 rounded-full bg-gradient-to-b from-[#0d0029] to-[#3d0658] shadow-lg">
        <ul className="flex items-center gap-6 text-xs font-light">
          <li className="text-[#f5e2ff]">
            <a className="font-extrabold border-b-2 border-[#f5e2ff] cursor-pointer">
              Home
            </a>
          </li>
          <li className="text-[#b9a2c5]">
            <a className="cursor-pointer">Myself</a>
          </li>
          <li className="text-[#b9a2c5]">
            <a className="cursor-pointer">Skills</a>
          </li>
          <li className="text-[#b9a2c5]">
            <a className="cursor-pointer">Projects</a>
          </li>
          <li className="text-[#b9a2c5]">
            <a className="cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-3">
          <li className="relative">
            <span className="animate-ping absolute top-0 bottom-0 right-0 left-0 rounded-full bg-[#fff] opacity-75"></span>
            <div className="bg-[#0d0029] cursor-pointer group hover:bg-[#812aad] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[5px] shadow-lg w-10 h-10 relative transition-all">
              <GitHub_Svg />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
export { Header };
