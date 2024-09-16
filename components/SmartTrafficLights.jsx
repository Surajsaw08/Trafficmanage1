// components/SmartTrafficLights.js
import Image from "next/image";

const SmartTrafficLights = () => {
  return (
    <section className="section" id="smart-traffic-lights">
      <div className="section-content">
        <div className="section-text pr-20">
          <h2 className="hero-title">Smart Traffic Lights</h2>
          <p className="hero-description">
            Our intelligent traffic light system adapts in real-time to traffic
            conditions. By optimizing signal timing based on current traffic
            flow, we can significantly reduce wait times and improve overall
            traffic efficiency.
          </p>
        </div>
        <div className="section-image">
          <Image
            src="/assects/image/light.jpg"
            alt="Smart Traffic Lights"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SmartTrafficLights;
