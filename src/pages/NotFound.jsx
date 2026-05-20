import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

function NotFound() {
  return (
    <div className="bg-[#F4F5F7] min-h-screen px-5 py-[100px] text-center">
      <h1 className="text-[72px] font-bold text-indigo-200 m-0">404</h1>
      <h2 className="text-[22px] font-bold text-[#1A1A1A] m-0 mt-3">Page Not Found</h2>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-6 bg-[#1F4D3D] text-white px-6 py-2.5 rounded-full no-underline font-semibold text-sm"
      >
        <HiHome /> Go Home
      </Link>
    </div>
  );
}

export default NotFound;
