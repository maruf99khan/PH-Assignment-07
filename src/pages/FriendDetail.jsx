import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowLeft, HiPhone, HiPencil, HiVideoCamera, HiChat, HiArchive, HiTrash, HiBell, HiMail } from "react-icons/hi";
import friendsData from "../friends.json";
import { useTimeline } from "../context/TimelineContext";

const statusColors = {
  overdue: { background: "#E0473E", color: "white" },
  "almost due": { background: "#E8A33D", color: "white" },
  "on-track": { background: "#2E7D5B", color: "white" },
};

const tagStyles = {
  default: { background: "#DDEFE3", color: "#1F4D3D" },
  TRAVEL: { background: "#DDF0EF", color: "#1F4D3D" },
};

function FriendDetail() {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === Number(id));
  const { addEntry } = useTimeline();

  if (!friend) {
    return (
      <div className="text-center px-5 py-[60px] bg-[#F4F5F7] min-h-screen">
        <h2 className="text-[22px] font-bold text-[#1A1A1A]">Friend not found</h2>
        <Link to="/" className="text-[#1F4D3D] mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  function handleCheckIn(type) {
    addEntry(friend.name, type);
    toast.success(type + " logged for " + friend.name + "!");
  }

  const sc = statusColors[friend.status] || statusColors["on-track"];

  return (
    <div className="bg-[#F4F5F7] min-h-screen p-6">
      <div className="max-w-[1100px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-1 text-gray-500 no-underline text-xs mb-5">
          <HiArrowLeft /> Back to Friends
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6">

          {/* LEFT COLUMN */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-7 text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-[90px] h-[90px] rounded-full mx-auto block object-cover"
              />
              <h2 className="text-xl font-bold text-[#1A1A1A] m-0 mt-[14px] mb-1.5">{friend.name}</h2>
              <div className="flex gap-1.5 justify-center flex-wrap">
                <span className="inline-block text-[11px] font-bold px-[14px] py-1 rounded-full uppercase tracking-[0.5px]" style={{ background: sc.background, color: sc.color }}>
                  {friend.status}
                </span>
                {friend.tags.slice(0, 1).map((tag) => {
                  let ts = tagStyles[tag.toUpperCase()] || tagStyles.default;
                  return (
                    <span key={tag} className="text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.3px]" style={{ background: ts.background, color: ts.color }}>
                      {tag}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 italic m-0 mt-3 mb-1">{friend.bio}</p>
              <p className="text-xs text-gray-400 m-0">
                Preferred: <HiMail className="inline align-middle" /> {friend.email}
              </p>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <button className="flex items-center gap-2.5 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer text-xs font-medium text-[#1A1A1A]">
                <HiBell className="text-[#1F4D3D]" /> Snooze 2 Weeks
              </button>
              <button className="flex items-center gap-2.5 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer text-xs font-medium text-[#1A1A1A]">
                <HiArchive className="text-[#1F4D3D]" /> Archive
              </button>
              <button className="flex items-center gap-2.5 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer text-xs font-medium text-red-600">
                <HiTrash className="text-red-600" /> Delete
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-[#1F4D3D] m-0">{friend.days_since_contact}</p>
                <p className="text-[11px] text-gray-500 m-0 mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-[#1F4D3D] m-0">{friend.goal}</p>
                <p className="text-[11px] text-gray-500 m-0 mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-xs font-bold text-[#1F4D3D] m-0">{friend.next_due_date}</p>
                <p className="text-[11px] text-gray-500 m-0 mt-1">Next Due</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 mt-4">
              <div className="flex items-center justify-between">
                <h3 className="m-0 text-[15px] font-bold text-[#1A1A1A]">Relationship Goal</h3>
                <button className="flex items-center gap-1 text-[#1F4D3D] text-xs font-medium bg-white border border-[#1F4D3D] rounded-full px-[14px] py-1 cursor-pointer">
                  <HiPencil /> Edit
                </button>
              </div>
              <p className="text-sm text-[#1A1A1A] m-0 mt-2.5">
                Connect every <strong>{friend.goal} days</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 mt-4">
              <h3 className="m-0 mb-3.5 text-[15px] font-bold text-[#1A1A1A]">Quick Check-In</h3>
              <div className="flex gap-2.5">
                <button
                  onClick={() => handleCheckIn("Call")}
                  className="flex-1 flex flex-col items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2 py-[14px] cursor-pointer text-xs font-medium text-[#1A1A1A]"
                >
                  <HiPhone style={{ fontSize: 22, color: "#1F4D3E" }} />
                  Call
                </button>
                <button
                  onClick={() => handleCheckIn("Text")}
                  className="flex-1 flex flex-col items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2 py-[14px] cursor-pointer text-xs font-medium text-[#1A1A1A]"
                >
                  <HiChat style={{ fontSize: 22, color: "#1F4D3D" }} />
                  Text
                </button>
                <button
                  onClick={() => handleCheckIn("Video")}
                  className="flex-1 flex flex-col items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2 py-[14px] cursor-pointer text-xs font-medium text-[#1A1A1A]"
                >
                  <HiVideoCamera style={{ fontSize: 22, color: "#1F4D3D" }} />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetail;
