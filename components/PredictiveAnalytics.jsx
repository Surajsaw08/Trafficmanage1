// components/PredictiveAnalytics.js
import Image from "next/image";

const PredictiveAnalytics = () => {
  return (
    <section className="section" id="predictive-analytics">
      <div className="section-content ">
        <div className="section-image ">
          <Image
            src="/assects/image/pre.jpg"
            alt="Predictive Analytics"
            width={400}
            height={400}
          />
        </div>
        <div className="section-text pl-20  ">
          <h2 className="hero-title">Predictive Analytics</h2>
          <p className="hero-description">
            Utilizing machine learning algorithms, our system can predict
            traffic patterns and potential congestion points. This allows city
            planners and traffic managers to take proactive measures to prevent
            traffic jams before they occur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PredictiveAnalytics;
