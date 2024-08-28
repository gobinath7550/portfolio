import { LinkedIn_Svg, WhatsApp_Svg } from "./svg-icons";

const SocialIcons = () => {
  return (
    <div className="fixed z-50 bottom-8 right-8">
      <ul className="flex flex-col gap-6">
        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#812aad] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
          <LinkedIn_Svg />
        </li>
        <li className="bg-[#0d0029] group cursor-pointer hover:bg-[#812aad] border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
          <WhatsApp_Svg />
        </li>
      </ul>
    </div>
  );
};
export { SocialIcons };
