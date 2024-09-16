"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    const canvas = document.getElementById("trafficCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 400;

    const roadColor = "#1a2530";
    const grassColor = "#2ecc71";

    // Load car images
    const carImage = new Image();
    carImage.src = "/assects/image/car.png"; // Replace with the path to your car image in the public folder
    const truckImage = new Image();
    truckImage.src = "/assects/image/car2.png"; // Replace with the path to your truck image

    function drawBackground() {
      ctx.fillStyle = grassColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawRoads() {
      ctx.fillStyle = roadColor;
      ctx.fillRect(0, 150, canvas.width, 100);
      ctx.fillRect(250, 0, 100, canvas.height);
    }

    function drawLaneMarkings() {
      ctx.strokeStyle = "white";
      ctx.setLineDash([20, 20]);
      ctx.beginPath();
      ctx.moveTo(0, 200);
      ctx.lineTo(canvas.width, 200);
      ctx.moveTo(300, 0);
      ctx.lineTo(300, canvas.height);
      ctx.stroke();
    }

    function drawTrafficLight(x, y, color) {
      ctx.fillStyle = "#333";
      ctx.fillRect(x, y, 20, 60);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + 10, y + 30, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawVehicle(x, y, image) {
      ctx.drawImage(image, x, y, 40, 20); // Adjust the width and height to fit your image
    }
    function drawVehicle2(x, y, image) {
      ctx.drawImage(image, x, y, 20, 40); // Adjust the width and height to fit your image
    }

    let carX = 0;
    let truckY = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();
      drawRoads();
      drawLaneMarkings();

      drawTrafficLight(230, 90, "red");
      drawTrafficLight(350, 90, "green");
      drawTrafficLight(230, 250, "green");
      drawTrafficLight(350, 250, "red");

      // Draw vehicles using images
      drawVehicle(carX, 160, carImage);
      drawVehicle2(270, truckY, truckImage);
      drawVehicle2(320, truckY, truckImage);

      carX = (carX + 2) % canvas.width;
      truckY = (truckY + 1) % canvas.height;

      requestAnimationFrame(animate);
    }

    // Start the animation once the images are loaded
    carImage.onload = () => {
      truckImage.onload = () => {
        animate();

        setTimeout(() => {
          drawVehicle2(300, truckY, carImage); // Call the function after 2 seconds
        }, 2000);
      };
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const handleAdmindashboard = () => {
    router.push("/dashboard");
  };
  const handleUser = () => {
    router.push("/userDashboard");
  };

  return (
    <main className="main-content">
      <section className="section" id="home">
        <div className="section-content">
          <div className="section-text">
            <h1 className="hero-title">Smart - Traffic Monitoring System</h1>
            <p className="hero-description">
              "Navigate Smarter: Revolutionizing Traffic Flow with Real-Time
              Management and Predictive Solutions for a Safer, Faster Commute."
            </p>
            <button className="btn signup-btn" onClick={handleUser}>
              User
            </button>
            <button
              className="btn signup-btn ml-6"
              onClick={handleAdmindashboard}
            >
              Administator
            </button>
          </div>
          <div className="section-image pl-20">
            <div className="traffic-simulation">
              <canvas id="trafficCanvas"></canvas>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
