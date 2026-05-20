import { useState } from "react";
import { HiPhone, HiChat, HiVideoCamera } from "react-icons/hi";
import { useTimeline } from "../context/TimelineContext";

const typeIcons = {
  Call: { icon: <HiPhone /> },
  Text: { icon: <HiChat /> },
  Video: { icon: <HiVideoCamera /> },
};

function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All"); // TODO: add sort by date

  const filteredEntries =
    filter === "All"
      ? entries
      : entries.filter((e) => e.type === filter);

  return (
    <div className="bg-[#F4F5F7] min-h-screen px-6 py-8">
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-[28px] font-bold text-[#1A1A1A] m-0 mb-5">Timeline</h1>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-[36px] py-2 border border-gray-200 rounded-lg text-sm text-[#1A1A1A] bg-white w-[220px] cursor-pointer appearance-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%236B7280' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {entries.length === 0 ? (
          <div className="text-center px-5 py-[50px] bg-white border border-gray-200 rounded-lg">
            <p className="text-gray-500">No interactions logged yet.</p>
            <p className="text-xs text-gray-400">Go to a friend's detail page and click Call, Text, or Video to add entries.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {filteredEntries.map((entry) => {
              const ic = typeIcons[entry.type] || typeIcons.Call;
              return (
                <div
                  key={entry.id}
                  className="flex items-center gap-3.5 bg-white border border-gray-200 rounded-lg px-[18px] py-[14px]"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-base text-[#1A1A1A]">
                    {ic.icon}
                  </div>
                  <div className="flex-1">
                    <p className="m-0 text-sm font-semibold text-[#1A1A1A]">
                      {entry.type} <span className="font-normal text-gray-500">with {entry.friendName}</span>
                    </p>
                    <p className="m-0 mt-0.5 text-xs text-gray-400">{entry.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
