import "./FlexGrid.css";

type FlexGridParams = {
  children: React.ReactNode;
  center1440: boolean;
  padding104?: boolean;
  gap72?: boolean;
};

function getClassName(
  center1440: boolean,
  padding104?: boolean,
  gap72?: boolean
) {
  const is104: string = padding104 === true ? " padding-104-lr" : "";

  const is1440: string = center1440 === true ? " center-1440" : "";

  const isGap72: string = gap72 === true ? " gap-72" : "";

  return "FlexGrid flex-grid" + is1440 + is104 + isGap72;
}

function FlexGrid(params: FlexGridParams) {
  return (
    <div
      className={getClassName(
        params.center1440,
        params.padding104,
        params.gap72
      )}
    >
      {params.children}
    </div>
  );
}

export default FlexGrid;
