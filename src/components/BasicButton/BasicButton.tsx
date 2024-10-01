import "./BasicButton.css";

type ButtonSize = "normal" | "medium" | "small";

type ButtonColor = "transparent" | "green";

type ButtonSettings = "normal" | "login";

type BasicButtonParams = {
  label: string;
  size: ButtonSize;
  color: ButtonColor;
  settings: ButtonSettings;
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
  return (
    <button
      className={getClassName(params.size, params.color, params.settings)}
    >
      {params.label}
    </button>
  );
}

export default BasicButton;
