import BasicButton from "../BasicButton/BasicButton";
import "./Demo.css";

function Demo() {
  return (
    <div className="Demo background-grey">
      <div className="headline-1 neutral-black-text text-centralized content-area padding-top-32">
        Pellentesque suscipit fringilla libero eu.
      </div>
      <BasicButton
        label={"Get a Demo"}
        size={"normal"}
        color={"green"}
        settings={"centralized"}
        arrow={true}
      ></BasicButton>
    </div>
  );
}

export default Demo;
