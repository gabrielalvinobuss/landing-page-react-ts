import FlexGrid from "../FlexGrid/FlexGrid";
import "./BasicButton.css";
import arrowRightWhite from "../../assets/arrow-right-white.svg";

type ButtonSize = "normal" | "medium" | "small";

type ButtonColor = "transparent" | "green";

type ButtonSettings = "normal" | "login";

type BasicButtonParams = {
  label: string;
  size: ButtonSize;
  color: ButtonColor;
  settings: ButtonSettings;
  arrow?: boolean;
};

function getClassName(
  size: ButtonSize,
  color: ButtonColor,
  settings: ButtonSettings
) {
  return (
    "BasicButton size-" +
    size +
    " BasicButton color-" +
    color +
    " BasicButton settings-" +
    settings
  );
}

function BasicButton(params: BasicButtonParams) {
  if (params.arrow === true) {
    return (
      <FlexGrid center1440={false}>
        <button
          className={getClassName(params.size, params.color, params.settings)}
        >
          {params.label}
          <div>
            <img src={arrowRightWhite} />
          </div>
        </button>
      </FlexGrid>
    );
  }
  return (
    <button
      className={getClassName(params.size, params.color, params.settings)}
    >
      {params.label}
    </button>
  );
}

export default BasicButton;
