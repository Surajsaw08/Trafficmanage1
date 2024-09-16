// pages/index.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";
import RealTimeMonitoring from "@/components/RealTimeMonitorin";
import SmartTrafficLights from "@/components/SmartTrafficLights";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Traffic Monitoring System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header></Header>
      <Main></Main>
      <RealTimeMonitoring></RealTimeMonitoring>
      <PredictiveAnalytics></PredictiveAnalytics>
      <SmartTrafficLights></SmartTrafficLights>
      <Footer></Footer>
    </div>
  );
}
