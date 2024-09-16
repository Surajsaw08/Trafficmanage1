"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  // Initial vehicles and time calculation
  const generateRandomVehicles = () => ({
    cars: Math.ceil(Math.random() * 15),
    trucks: Math.ceil(Math.random() * 5),
    bikes: Math.ceil(Math.random() * 15),
    buses: Math.ceil(Math.random() * 6),
  });

  const calculateTotalTime = (vehicles) =>
    vehicles.cars * 2 +
    vehicles.trucks * 3 +
    vehicles.buses * 3 +
    vehicles.bikes * 1;

  const initialVehicles = generateRandomVehicles();
  const initialTotalTime = calculateTotalTime(initialVehicles);

  // State management
  const [roadTimers, setRoadTimers] = useState({
    road1: initialTotalTime,
    road2: initialTotalTime,
    road3: 0,
    road4: 0,
  });

  const [lightStates, setLightStates] = useState({
    road1: "green",
    road2: "red",
    road3: "red",
    road4: "red",
  });

  const [vehicleCounts, setVehicleCounts] = useState(initialVehicles);
  const [currentRoad, setCurrentRoad] = useState("road1");
  const [nextRoad, setNextRoad] = useState("road2");
  const [totalVehiclesPerRound, setTotalVehiclesPerRound] = useState({
    cars: 0,
    trucks: 0,
    bikes: 0,
    buses: 0,
  });

  const [roundsCompleted, setRoundsCompleted] = useState(0);

  // Timer update and road switch logic
  useEffect(() => {
    const interval = setInterval(() => {
      setRoadTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        const roads = ["road1", "road2", "road3", "road4"];
        const currentIndex = roads.indexOf(currentRoad);
        const nextIndex = (currentIndex + 1) % roads.length;

        // Update the current road's timer
        if (updatedTimers[currentRoad] > 0) {
          updatedTimers[currentRoad] -= 1;

          if (updatedTimers[nextRoad] > 0) {
            updatedTimers[nextRoad] -= 1;
          }
          // Handle yellow light when timer reaches 5
          if (updatedTimers[currentRoad] === 5) {
            setLightStates((prevLightStates) => ({
              ...prevLightStates,
              [currentRoad]: "yellow", // Set current road to yellow
              [nextRoad]: "yellow",
            }));
          }
          // Switch roads when timer reaches zero
          if (updatedTimers[currentRoad] === 0) {
            switchRoad();
          }
        }

        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentRoad, nextRoad]);

  const switchRoad = () => {
    const roads = ["road1", "road2", "road3", "road4"];
    const currentIndex = roads.indexOf(currentRoad);
    const nextIndex = (currentIndex + 1) % roads.length;

    // Set the next road's light to green, others to red
    const newLightStates = {
      road1: "red",
      road2: "red",
      road3: "red",
      road4: "red",
      [roads[nextIndex]]: "green",
    };

    setLightStates(newLightStates);

    // Add current vehicle counts to the total count for all rounds
    setTotalVehiclesPerRound((prevTotals) => ({
      cars: prevTotals.cars + vehicleCounts.cars / 2,
      trucks: prevTotals.trucks + vehicleCounts.trucks / 2,
      bikes: prevTotals.bikes + vehicleCounts.bikes / 2,
      buses: prevTotals.buses + vehicleCounts.buses / 2,
    }));

    // Generate new random vehicle counts for the next road
    const newVehicleCounts = generateRandomVehicles();
    setVehicleCounts(newVehicleCounts);

    // Reset the timer for the next road
    const newTotalTime = calculateTotalTime(newVehicleCounts);
    setRoadTimers({
      [roads[nextIndex]]: newTotalTime,
      [roads[(nextIndex + 1) % roads.length]]: newTotalTime,
      [roads[(nextIndex + 2) % roads.length]]: 0,
      [roads[(nextIndex + 3) % roads.length]]: 0,
    });

    // Update current and next roads
    setCurrentRoad(roads[nextIndex]);
    setNextRoad(roads[(nextIndex + 1) % roads.length]);

    // Increment rounds completed
    setRoundsCompleted((prevRounds) => prevRounds + 1);
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="dashbordbackground">
      <button
        className="text-white ml-20 mt-10 py-1 px-3 rounded-md font-3xl border font-bold cursor-pointer"
        onClick={handleHome}
      >
        Home
      </button>

      <div className="py-[50px] dashbordbackground text-white">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl text-white">Traffic Dashboard</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 mx-20 py-20">
          <div className="background1 rounded-md p-4">
            <h1 className="text-white font-bold text-2xl">Vehicles Count</h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* Vehicle counts display */}
              {["cars", "buses", "trucks", "bikes"].map((type) => (
                <div
                  key={type}
                  className={`flex justify-between bg-${
                    type === "cars"
                      ? "red"
                      : type === "bikes"
                      ? "yellow"
                      : type === "trucks"
                      ? "green"
                      : type === "buses"
                      ? "blue"
                      : "black"
                  }-600 font-bold px-4 py-4 rounded-md`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                  <h1>{vehicleCounts[type]}</h1>
                </div>
              ))}
            </div>
            {/* Total vehicles per 60 rounds */}
            <div className="grid grid-cols-4 mt-10 py-4 px-10 gap-4 bg-slate-500 rounded-md">
              {["cars", "buses", "trucks", "bikes"].map((type) => (
                <div
                  key={type}
                  className="bg-gray-400 flex flex-col items-center py-1 px-auto rounded-md font-bold text-blue-700"
                >
                  {totalVehiclesPerRound[type]}
                  <p className="text-white">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic lights display */}
          <div className="background1 rounded-md p-4">
            <h1 className="text-white font-bold text-2xl">Traffic Lights</h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["road1", "road2", "road3", "road4"].map((road) => (
                <div
                  key={road}
                  className="bg-gray-500 font-bold px-4 py-3 rounded-md"
                >
                  <p>{road}</p>
                  <div className="flex justify-around items-center border rounded-md px-4 py-2 mt-2">
                    <div
                      className={`rounded-full w-6 h-6 ${
                        lightStates[road] === "green"
                          ? "bg-green-600"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`rounded-full w-6 h-6 ${
                        lightStates[road] === "yellow"
                          ? "bg-yellow-600"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`rounded-full w-6 h-6 ${
                        lightStates[road] === "red"
                          ? "bg-red-600"
                          : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <p>{roadTimers[road]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
