import "./FlexGrid.css";

type FlexGridParams = {
  children: React.ReactNode;
  center1440: boolean;
  padding104?: boolean;
};

function getClassName(center1440: boolean, padding104?: boolean) {
  const is104: string = padding104 === true ? " padding-104-lr" : "";

  const is1440: string = center1440 === true ? " center-1440" : "";

  return "FlexGrid flex-grid" + is1440 + is104;
}

function FlexGrid(params: FlexGridParams) {
  return (
    <div className={getClassName(params.center1440, params.padding104)}>
      {params.children}
    </div>
  );
}

export default FlexGrid;
