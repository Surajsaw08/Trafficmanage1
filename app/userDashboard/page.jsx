// const trafficData = {
//   trafficCondition: "Heavy",
//   vehicleDistribution: [
//     { name: "Cars", value: 65, color: "#3498db" },
//     { name: "Buses", value: 10, color: "#2ecc71" },
//     { name: "Trucks", value: 15, color: "#e74c3c" },
//     { name: "Motorcycles", value: 10, color: "#f39c12" },
//   ],
//   incidents: [
//     { type: "Accident", location: "Main St & 5th Ave", time: "10:30 AM" },
//     { type: "Road Work", location: "Broadway & 7th St", time: "All Day" },
//   ],
//   suggestedPaths: [
//     { from: "Downtown", to: "Airport", time: "45 min", distance: "22 km" },
//     { from: "Suburb", to: "City Center", time: "30 min", distance: "15 km" },
//     {
//       from: "Industrial Park",
//       to: "Shopping Mall",
//       time: "20 min",
//       distance: "10 km",
//     },
//   ],
// };

// function calculatePieChartData(data) {
//   const total = data.reduce((acc, item) => acc + item.value, 0);
//   let cumulativeValue = 0;

//   return data.map((item) => {
//     const startAngle = (cumulativeValue / total) * 360;
//     cumulativeValue += item.value;
//     const endAngle = (cumulativeValue / total) * 360;

//     return { ...item, startAngle, endAngle };
//   });
// }

// function describeArc(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);

//   const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

//   return [
//     "M",
//     start.x,
//     start.y,
//     "A",
//     r,
//     r,
//     0,
//     largeArcFlag,
//     0,
//     end.x,
//     end.y,
//     "L",
//     cx,
//     cy,
//     "Z",
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleInDegrees) {
//   const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

//   return {
//     x: cx + r * Math.cos(angleInRadians),
//     y: cy + r * Math.sin(angleInRadians),
//   };
// }

// function TrafficDashboard() {
//   const pieData = calculatePieChartData(trafficData.vehicleDistribution);

//   return (
//     <div className="container mx-auto p-4 bg-gray-900 text-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         {/* Traffic Condition Card */}
//         <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
//           <div className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <div className="text-sm font-medium">
//               Traffic Condition{" "}
//               <span className="inline-block text-yellow-500 ml-1">⚠️</span>
//             </div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold">Heavy</div>
//             <div className="mt-4">
//               <h3 className="text-sm font-medium mb-2 bg-gray-700 inline-block px-2 py-1 rounded">
//                 Traffic Incidents
//               </h3>
//               <div className="space-y-2">
//                 {trafficData.incidents.map((incident, index) => (
//                   <div key={index} className="bg-gray-700 p-2 rounded text-sm">
//                     <span className="inline-block text-red-500 mr-1">⚠️</span>
//                     <span className="font-medium">{incident.type}</span>
//                     <div className="ml-5 text-gray-400">
//                       {incident.location}
//                       <br />
//                       {incident.time}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Vehicle Distribution Card */}
//         <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
//           <div className="text-sm font-medium">Vehicle Distribution</div>
//           <div className="h-[200px] flex justify-center items-center">
//             <svg width="200" height="200" viewBox="0 0 200 200">
//               {pieData.map((entry, index) => (
//                 <path
//                   key={index}
//                   d={describeArc(
//                     100,
//                     100,
//                     80,
//                     entry.startAngle,
//                     entry.endAngle
//                   )}
//                   fill={entry.color}
//                 />
//               ))}
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Suggested Paths Card */}
//       <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
//         <div className="text-sm font-medium">
//           Suggested Paths & Predicted Times
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {trafficData.suggestedPaths.map((path, index) => (
//             <div key={index} className="bg-gray-700 p-4 rounded-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-blue-400">📍</span>
//                 <span className="text-green-400">⏰</span>
//               </div>
//               <div className="text-sm">
//                 {path.from} to {path.to}
//               </div>
//               <div className="text-xs text-gray-400">
//                 Distance: {path.distance}
//               </div>
//               <div className="text-xl font-bold text-yellow-400 mt-2">
//                 {path.time}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrafficDashboard;
"use client";

import { useRouter } from "next/navigation";

function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "L",
    cx,
    cy,
    "Z",
  ].join(" ");
}

function calculatePieChartData(data) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativeValue = 0;

  return data.map((item) => {
    const startAngle = (cumulativeValue / total) * 360;
    cumulativeValue += item.value;
    const endAngle = (cumulativeValue / total) * 360;
    const percentage = ((item.value / total) * 100).toFixed(1); // Calculate percentage

    return { ...item, startAngle, endAngle, percentage }; // Include percentage
  });
}

function TrafficDashboard() {
  const trafficData = {
    trafficCondition: "Heavy",
    vehicleDistribution: [
      { name: "Cars", value: 65, color: "#3498db" },
      { name: "Buses", value: 10, color: "#2ecc71" },
      { name: "Trucks", value: 15, color: "#e74c3c" },
      { name: "Motorcycles", value: 10, color: "#f39c12" },
    ],
    incidents: [
      { type: "Accident", location: "Main St & 5th Ave", time: "10:30 AM" },
      { type: "Road Work", location: "Broadway & 7th St", time: "All Day" },
    ],
    suggestedPaths: [
      { from: "Downtown", to: "Airport", time: "45 min", distance: "22 km" },
      { from: "Suburb", to: "City Center", time: "30 min", distance: "15 km" },
      {
        from: "Industrial Park",
        to: "Shopping Mall",
        time: "20 min",
        distance: "10 km",
      },
    ],
  };

  const pieData = calculatePieChartData(trafficData.vehicleDistribution);
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };

  const handleTrafficDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <div className="container mx-auto px-4 pt-10 pb-10 bg-gray-900 text-white">
      <div className=" flex justify-between mx-5 mt-[-10px] mb-10">
        <button className="px-4 py-2 border rounded-md" onClick={handleHome}>
          Home
        </button>
        <button
          className="px-4 py-2 border rounded-md"
          onClick={handleTrafficDashboard}
        >
          Traffic Dashboard
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Traffic Condition Card */}
        <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">
              Traffic Condition{" "}
              <span className="inline-block text-yellow-500 ml-1">⚠️</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">Heavy</div>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2 bg-gray-700 inline-block px-2 py-1 rounded">
                Traffic Incidents
              </h3>
              <div className="space-y-2">
                {trafficData.incidents.map((incident, index) => (
                  <div key={index} className="bg-gray-700 p-2 rounded text-sm">
                    <span className="inline-block text-red-500 mr-1">⚠️</span>
                    <span className="font-medium">{incident.type}</span>
                    <div className="ml-5 text-gray-400">
                      {incident.location}
                      <br />
                      {incident.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Distribution Card */}
        <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
          <div className="text-sm font-medium">Vehicle Distribution</div>
          <div className="h-[200px] flex justify-center items-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              {pieData.map((entry, index) => (
                <path
                  key={index}
                  d={describeArc(
                    100,
                    100,
                    80,
                    entry.startAngle,
                    entry.endAngle
                  )}
                  fill={entry.color}
                />
              ))}
            </svg>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Legend</h3>
            <ul className="space-y-1">
              {pieData.map((entry, index) => (
                <li key={index} className="flex justify-between">
                  <span className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-2"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    {entry.name}
                  </span>
                  <span>{entry.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Suggested Paths Card */}
      <div className="bg-gray-800 border-gray-700 p-4 rounded-lg">
        <div className="text-sm font-medium py-4">
          Suggested Paths & Predicted Times
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trafficData.suggestedPaths.map((path, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-400">📍</span>
                <span className="text-green-400">⏰</span>
              </div>
              <div className="text-sm">
                {path.from} to {path.to}
              </div>
              <div className="text-xs text-gray-400">
                Distance: {path.distance}
              </div>
              <div className="text-xl font-bold text-yellow-400 mt-2">
                {path.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrafficDashboard;
