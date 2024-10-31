import "./App.css";
import Header from "./components/Header/Header";
import BannerMain from "./components/BannerMain/BannerMain";
import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";
import Helping from "./components/Helping/Helping";
import Customers from "./components/Customers/Customers";
import Demo from "./components/Demo/Demo";
import CommunityUpdates from "./components/CommunityUpdates/CommunityUpdates";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <BannerMain />

      <Clients />

      <Community />

      <Banner bannerType={"banner1"} />

      <Helping />

      <Banner bannerType={"banner2"} />

      <Customers />

      <CommunityUpdates />

      <Demo />

      <Footer />
    </>
  );
}

export default App;
