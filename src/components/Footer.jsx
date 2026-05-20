import { HiCamera } from "react-icons/hi";

function Footer() {
  return (
    <div className="bg-[#1F4D3D] px-6 py-10 pb-5">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="text-[28px] font-bold text-white mb-2">KeenKeeper</div>
        <p className="text-white/70 text-sm m-0 mb-6 leading-relaxed">
          Your personal shelf of meaningful connections.
        </p>

        <p className="text-white/60 text-xs m-0 mb-3 tracking-[1px] uppercase">Social Links</p>
        <div className="flex justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg text-[#1F4D3D] cursor-pointer">
            <HiCamera />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-base font-bold text-[#1F4D3D] cursor-pointer">
            f
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-base font-bold text-[#1F4D3D] cursor-pointer">
            X
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/15 pt-4 gap-2">
          <p className="text-white/50 text-xs m-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <span className="text-white/50 cursor-pointer">Privacy Policy</span>
            <span className="text-white/50 cursor-pointer">Terms of Service</span>
            <span className="text-white/50 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
