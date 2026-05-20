import { Link } from "react-router-dom";

const statusStyles = {
  overdue: { background: "#E0473E", color: "white" },
  "almost due": { background: "#E8A33D", color: "white" },
  "on-track": { background: "#2E7D5B", color: "white" },
};

const tagStyles = {
  default: { background: "#DDEFE3", color: "#1F4D3D" },
  TRAVEL: { background: "#DDF0EF", color: "#1F4D3D" },
};

function FriendCard({ friend }) {
  const st = statusStyles[friend.status] || statusStyles["on-track"];

  return (
    <Link
      to={"/friend/" + friend.id}
      className="block bg-white rounded-lg border border-gray-200 no-underline px-4 py-5 text-center"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-2.5 block"
      />
      <h3 className="m-0 text-[15px] font-bold text-[#1A1A1A]">
        {friend.name}
      </h3>
      <p className="m-0 mt-1 text-xs text-gray-500">
        {friend.days_since_contact} days since contact
      </p>

      <div className="flex flex-wrap gap-1 justify-center mt-2.5">
        {friend.tags.map((tag) => {
          const ts = tagStyles[tag.toUpperCase()] || tagStyles.default;
          return (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-[3px] rounded-full uppercase tracking-[0.3px]"
              style={{ background: ts.background, color: ts.color }}
            >
              {tag}
            </span>
          );
        })}
      </div>

      <div className="mt-3">
        <span
          className="block text-[11px] font-bold px-2.5 py-[5px] rounded-full uppercase tracking-[0.5px]"
          style={{ background: st.background, color: st.color }}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
}

export default FriendCard;
