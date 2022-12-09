import OverlayCate from "./OverlayCate";
import loupe from "../../img/bon_coin/loupe.svg";
import Image from "next/image";

import styled from "styled-components";

const Grand = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Petit = styled.div`
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

export default function prout() {
  return (
    <>
      <Grand>
        <CateGrandeLargeur />
      </Grand>
      <Petit>
        <CateMoyenneLargeur />
      </Petit>
      <TresPetit>
        <CatePetit />
      </TresPetit>
    </>
  );
}

export function CateGrandeLargeur() {
  return (
    <div className="d-flex flex-row h-100 rounded bg-light mr-2">
      <div
        style={{ width: "195px" }}
        className="px-3 d-flex flex-row rounded-right bg-light justify-content-between align-items-center"
      >
        <OverlayCate />
        Catégories
        <div>
          {/* <Image width={16} height={16} src={fleche_bas_1} /> */}
          <img
            style={{ width: "16px", height: "16px" }}
            src="img/fleche_bas_1.svg"
            className="flex-shrink-0"
          />
        </div>
      </div>
      <div className="border-left-0 border border-dark"></div>
      <div
        style={{ width: "320px" }}
        className="d-flex flex-row border-left me-2 justify-content-left align-items-center"
      >
        <div className="p-2">
          <Image width={16} height={16} src={loupe} className="flex-shrink-0" />
        </div>
        <div className="ms-1 text-secondary flex-shrink-0">
          Que recherchez-vous ?
        </div>
      </div>
    </div>
  );
}

export function CateMoyenneLargeur() {
  return (
    <div className="d-flex flex-row h-100 rounded bg-light mr-2">
      <div
        style={{ width: "316px" }}
        className="px-3 d-flex flex-row rounded-right bg-light justify-content-between align-items-center"
      >
        <OverlayCate />
        Choisissez votre categorie
        <div>
          {/* <Image width={16} height={16} src={fleche_bas_1} /> */}
          <img
            style={{ width: "16px", height: "16px" }}
            src="img/fleche_bas_1.svg"
            className="flex-shrink-0"
          />
        </div>
      </div>
      <div style={{ width: "20px" }} className="bx-3"></div>
      <div
        style={{ width: "320px" }}
        className="border border-1 d-flex bg-white flex-row border-left me-2 justify-content-left align-items-center"
      >
        <div className="p-2">
          <Image width={16} height={16} src={loupe} className="flex-shrink-0" />
        </div>
        <div className="ms-1 text-secondary flex-shrink-0">
          Que recherchez-vous ?
        </div>
      </div>
    </div>
  );
}

export function CatePetit() {
  return (
    <div className="d-flex flex-column h-100 rounded bg-light mr-2">
      <div
        style={{ width: "316px" }}
        className="px-3 d-flex flex-row rounded-right bg-light justify-content-between align-items-center"
      >
        <OverlayCate />
        Choisissez votre categorie
        <div>
          {/* <Image width={16} height={16} src={fleche_bas_1} /> */}
          <img
            style={{ width: "16px", height: "16px" }}
            src="img/fleche_bas_1.svg"
            className="flex-shrink-0"
          />
        </div>
      </div>
      <div style={{ width: "20px" }} className="bx-3"></div>
      <div
        style={{ width: "320px" }}
        className="border border-1 d-flex bg-white flex-row border-left me-2 justify-content-left align-items-center"
      >
        <div className="p-2">
          <Image width={16} height={16} src={loupe} className="flex-shrink-0" />
        </div>
        <div className="ms-1 text-secondary flex-shrink-0">
          Que recherchez-vous ?
        </div>
      </div>
    </div>
  );
}
