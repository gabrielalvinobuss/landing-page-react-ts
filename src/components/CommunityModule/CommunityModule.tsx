import "./CommunityModule.css";
import CommunityModuleImage1 from "../../../src/assets/community-updates1.png";
import FlexGrid from "../FlexGrid/FlexGrid";
// import CommunityModuleImage2 from "../../../src/assets/community-updates2.png";
// import CommunityModuleImage3 from "../../../src/assets/community-updates3.png";

type CommunityModuleParams = {
  text: string;
  module: string;
};

function CommunityModule(params: CommunityModuleParams) {
  if (params.module === "1") {
    return (
      <FlexGrid center1440>
        <div className="community-updates-grid justify-content-center padding-top-16">
          <div className="image-box-community-updates">
            <img src={CommunityModuleImage1} />
          </div>
          {/* NAO ESTA PEGANDO AS FORMATACOES DO CSS NO TEXTO, EU TESTAVA TENTANDO SEPARAR POR DIV PARA VER SE É ISSO, POIS PRECISO DE TODAS ESSAS ABAIXO NA MESMA DIV EM CIMA DA IMAGEM. */}
          <div className="background-grey justify-content-center box-shadow-community-updates-content-box ">
            <div className="headline-4 medium-grey text-centralized community-updates-content-box">
              {params.text}
            </div>
          </div>
        </div>
      </FlexGrid>
    );
  }
}

export default CommunityModule;
