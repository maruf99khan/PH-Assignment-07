import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTimeline } from "../context/TimelineContext";

function Stats() {
  const { entries } = useTimeline();

  const callCount = entries.filter((e) => e.type === "Call").length;
  const textCount = entries.filter((e) => e.type === "Text").length;
  const videoCount = entries.filter((e) => e.type === "Video").length;

  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ].filter(d => d.value > 0);

  const PIE_COLORS = ["#6B4FA0", "#1F4D3D", "#3C8C6A"];

  return (
    <div className="bg-[#F4F5F7] min-h-screen px-6 py-8">
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-[28px] font-bold text-[#1A1A1A] m-0 mb-6">Friendship Analytics</h1>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-[15px] font-bold text-[#1A1A1A] m-0 mb-4">By Interaction Type</h2>

          {chartData.length === 0 ? (
            <p className="text-center text-gray-400 py-[60px]">No interactions yet. Go log some calls, texts, or videos!</p>
          ) : (
            <div className="text-center">
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    formatter={(value) => <span style={{ color: "#1A1A1A", fontSize: 13 }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
