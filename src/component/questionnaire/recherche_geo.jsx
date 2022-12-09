import React, { useState, useRef } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";
import menu from "../../img/bon_coin/menu.svg";
import fleche_bas_1 from "../../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../../img/bon_coin/fleche_bas_2.svg";
import loupe from "../../img/bon_coin/loupe.svg";
import croix from "../../img/bon_coin/croix.svg";
import pointer from "../../img/bon_coin/pointer.svg";
import Modal_window from "./../modal";
import { Modal, Overlay } from "react-bootstrap";

const Grand = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: auto;
  }
  @media (max-width: 768px) {
    display: none;
    margin: auto;
  }
`;

const Petit = styled.div`
  @media (min-width: 768px) {
    display: none;
    margin: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    margin: auto;
  }
  @media (max-width: 525px) {
    display: none;
    margin: auto;
  }
`;

const TresPetit = styled.div`
  @media (max-width: 525px) {
    display: flex;
    margin: auto;
  }
  @media (min-width: 525px) {
    display: none;
    margin: auto;
  }
`;

export default function Geo() {
  return (
    <>
      <Grand>
        <GrandGeo />
      </Grand>
      <Petit>
        <PetitGeo />
      </Petit>
    </>
  );
}
export function GrandGeo() {
  return (
    <div
      style={{ width: "365px", height: "40px" }}
      id="geo"
      className="bg-light d-flex my-auto justify-content-between geo_droite position-relative align-items-center"
    >
      <Grand>
        <div
          style={{ width: "140px", heigth: "38px" }}
          className="position-relative bg-light d-flex flex-row w-100  rounded bg-light justify-content-between align-items-center"
        >
          <OverlayLoca />
          <div className="pe-2 justify-content-center align-items-center">
            <Image width={16} height={16} src={fleche_bas_2} />
          </div>
        </div>
      </Grand>
    </div>
  );
}

function PetitGeo() {
  return (
    <div
      style={{ width: "180px", height: "40px" }}
      id="geo"
      className="bg-light d-flex my-auto justify-content-between geo_droite position-relative align-items-center"
    >
      <div
        style={{ width: "140px", heigth: "38px" }}
        className="position-relative bg-light d-flex flex-row w-100  rounded bg-light justify-content-between align-items-center"
      >
        <OverlayLoca />
      </div>
    </div>
  );
}

const LogxfoTitre = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const OverlayLoca = (props) => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [largeur, setlargeur] = React.useState(props.largeur);
  const target = useRef(null);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  const handleVisible2 = () => {
    setVisible("d-none");
  };

  const handleOpen2 = () => {
    console.log(visible);
    setVisible(!visible);
  };
  return (
    <>
      {/* <span onClick={handleOpen} ref={target} className="pointer px-1">Toute la france</span> */}
      <div
        // style={{ width: "40%" }}
        style={{ width: "150px", height: "30px" }}
        // style={{ width: "200px", height: "30px" }}
        className="ms-1 {visible ? 'd-flex' : 'd-none'}   pointer h-100 d-flex flex-row bg-white align-items-center justify-content-between border rounded-pill text-center"
      >
        <Petit>
          <div className="pe-2 justify-content-center align-items-center">
            <Image width={16} height={16} src={pointer} />
          </div>
        </Petit>
        <span
          style={{ height: "30px" }}
          onClick={handleOpen}
          ref={target}
          className="align-middle px-2 pt-1"
        >
          Toute la france
        </span>

        <div className="bs-2 me-1">
          <img
            width={16}
            height={16}
            className="flex-shrink-0 bg-light croix bs-2"
            onClick={handleOpen2}
            src="/img/croix.svg"
          />
        </div>
      </div>
      <Overlay
        rootClose
        onHide={handleClose}
        target={target}
        show={open}
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              padding: "16px",
              color: "black",
              width: "30%",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <h6>Localisations récentes</h6>

            <div className="d-flex flex-row rounded">
              <div>Effacer</div>
              <div className="orange-font">Valider les locatisations</div>
            </div>
          </div>
        )}
      </Overlay>
    </>
  );
};
// export default OverlayLoca;
