// components/RealTimeMonitoring.js
import Image from "next/image";

const RealTimeMonitoring = () => {
  return (
    <section className="section" id="realtime-monitoring">
      <div className="section-content  ">
        <div className="section-text pr-20">
          <h2 className="hero-title">Real-Time Monitoring</h2>
          <p className="hero-description">
            Our advanced AI-powered cameras provide real-time traffic data,
            allowing for immediate response to changing road conditions. This
            system helps reduce congestion and improves overall traffic flow.
          </p>
        </div>
        <div className="section-image">
          <Image
            src="/assects/image/monitor.png"
            alt="Real-Time Monitoring"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default RealTimeMonitoring;
