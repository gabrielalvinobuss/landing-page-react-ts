import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicButton from "./components/BasicButton/BasicButton";
import Header from "./components/Header/Header";
import BannerMain from "./components/BannerMain/BannerMain";
import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <BannerMain />
      </div>
      <Clients />
      <Community />
      <div>
        <Banner
          title={"The unseen of spending three years at Pixelgrade"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          }
          bannerType={"banner1"}
        />
      </div>
      <Banner
        title={"How to design your site footer like we did"}
        text={
          "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        }
        bannerType={"banner2"}
      />
    </>
  );
}

export default App;