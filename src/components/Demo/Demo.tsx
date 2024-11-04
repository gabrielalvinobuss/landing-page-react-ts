import { useEffect, useState } from "react";
import BasicButton from "../BasicButton/BasicButton";
import "./Demo.css";

type DemoParams = {
  title: string;
  buttonLabel: string;
};

function getServerData(): DemoParams {
  return {
    title: "Pellentesque suscipit fringilla libero eu.",
    buttonLabel: "Get a Demo",
  };
}

function Demo() {
  const [demoData, setDemoData] = useState<DemoParams>({
    title: "",
    buttonLabel: "",
  });

  useEffect(() => {
    const tempData = getServerData();

    setDemoData(tempData);
  }, []);

  return (
    <div className="Demo background-grey">
      <div className="headline-1 neutral-black-text text-centralized content-area padding-top-32">
        {demoData.title}
      </div>
      <BasicButton
        label={demoData.buttonLabel}
        size={"normal"}
        color={"green"}
        settings={"centralized"}
        arrow={true}
      ></BasicButton>
    </div>
  );
}

export default Demo;
