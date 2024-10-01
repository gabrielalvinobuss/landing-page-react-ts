type FlexGridParams = {
  children: React.ReactNode;
  center1440: boolean;
};

function getClassName(center1440: boolean) {
  if (center1440 === true) {
    return "flex-grid center-1440";
  }
  return "flex-grid";
}

function FlexGrid(params: FlexGridParams) {
  return (
    <div className={getClassName(params.center1440)}>{params.children}</div>
  );
}

export default FlexGrid;
