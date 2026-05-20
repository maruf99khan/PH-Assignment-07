import { useState, useEffect } from "react";
import friendsData from "../friends.json";
import FriendCard from "../components/FriendCard";

function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("home page loaded lol");

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#F4F5F7] min-h-screen px-5 py-[60px] text-center">
        <div className="text-sm text-gray-500">
          <p>Loading your friends...</p>
          <div className="w-[30px] h-[30px] border-3 border-gray-200 border-t-[#1F4D3D] rounded-full mx-auto mt-2.5"></div>
        </div>
      </div>
    );
  }

  const overdue = friends.filter(f => f.status === "overdue").length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const almostDue = friends.filter(f => f.status === "almost due").length;

  return (
    <div className="bg-[#F4F5F7] min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="text-center mb-9">
          <h1 className="text-[30px] font-bold text-[#1A1A1A] m-0 tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-[15px] text-gray-500 m-0 mt-2 mb-5">
            Browse, tend, and nurture the relationships that matter most.
          </p>
          <button
            className="bg-[#1F4D3D] text-white border-0 px-7 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
          >
            + Add a Friend
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3.5 mb-10">
          <div className="bg-white rounded-lg border border-gray-200 px-3 py-[18px] text-center">
            <p className="text-[28px] font-bold text-[#1F4D3D] m-0">{friends.length}</p>
            <p className="text-xs text-gray-500 m-0 mt-1">Total Friends</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 px-3 py-[18px] text-center">
            <p className="text-[28px] font-bold text-[#1F4D3D] m-0">{onTrack}</p>
            <p className="text-xs text-gray-500 m-0 mt-1">On Track</p>
          </div>
          <div className="bg-white rounded-md border border-gray-200 px-3 py-[18px] text-center">
            <p className="text-[28px] font-bold text-[#1F4D3D] m-0">{overdue + almostDue}</p>
            <p className="text-xs text-gray-500 m-0 mt-1">Need Attention</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 px-3 py-[18px] text-center">
            <p className="text-[28px] font-bold text-[#1F4D3D] m-0">0</p>
            <p className="text-xs text-gray-500 m-0 mt-1">Interactions This Month</p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-[#1A1A1A] m-0 mb-4">
          Your Friends
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
