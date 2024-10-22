import "./FlexGrid.css";

type TGaps = "12" | "24";

type FlexGridParams = {
  children: React.ReactNode;
  center1440: boolean;
  padding104?: boolean;
  gap?: TGaps
};

function getClassName(center1440: boolean, padding104?: boolean, gap?: TGaps) {
  const is104: string = padding104 === true ? " padding-104-lr" : "";

  const is1440: string = center1440 === true ? " center-1440" : "";

  let gapClass = "";

  if (gap === "12") gapClass = " gap-12"
  if (gap === "24") gapClass = " gap-24"

  return "FlexGrid flex-grid" + is1440 + is104 + gapClass;
}

function FlexGrid(params: FlexGridParams) {
  return (
    <div className={getClassName(params.center1440, params.padding104, params.gap)}>
      {params.children}
    </div>
  );
}

export default FlexGrid;
