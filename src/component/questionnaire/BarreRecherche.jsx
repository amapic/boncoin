import Geo from "./recherche_geo";
import CateEtZoneSaisie from "./CateRechercheTexte";
import styled from "styled-components";
// import Cate
// const BarreDefilement = () => {};

// .B{
//   width:45%;
// }

// const TresPetit = styled.div`
//   @media (max-width: 525px) {
//     display: flex;
//   }
//   @media (min-width: 0px) {
//     display: none;
//   }
// `;

function BoutonOrange() {
  return (
    <div
      style={{ height: "40px", width: "200px" }}
      className="d-none d-sm-flex  w-20 m-auto mt-5 orange justify-content-between align-items-center border rounded d-flex flex-row"
    >
      <div
        className="ps-2 w-30 lh-2"
        style={{ color: "#fff", fontSize: "14px" }}
      >
        Déposer une annonce
      </div>
      <div className="me-3 ms-2">
        <Image width={14} height={14} src={plus} />
      </div>
    </div>
  );
}

function BoutonBleu() {
  return (
    <div
      style={{ height: "40px", width: "200px" }}
      className="d-none d-sm-block w-20 m-auto mt-5 px-3 bleu justify-content-between align-items-center border rounded d-flex flex-row"
    >
      <div className="w-100 ps-2" style={{ color: "#fff", fontSize: "14px" }}>
        Déposer une annonce
      </div>
    </div>
  );
}

const Grand = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Petit = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 525px) {
    display: none;
  }
`;

const TresPetit = styled.div`
  @media (max-width: 525px) {
    display: flex;
  }
  @media (min-width: 0px) {
    display: none;
  }
`;

export default function BarreRecherche() {
  return (
    <>
      <div
        // style={{ height: "40px" }}
        className="d-flex flex-row m-2 justify-content-between align-items-center"
      >
        {/* <Geo /> */}
        <CateEtZoneSaisie />

        <div style={{ width: "2%" }}></div>

        {/* <div style={{ height: "40px" }} className="geo_droite"> */}
        <Grand>
          <Geo />
        </Grand>
        {/* </div> */}
      </div>
      {/* <div className="d-flex"> */}
      {/* <Grand>
        <Geo />
      <Grand> */}
      {/* </div> */}
    </>
  );
}
