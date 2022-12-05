import React, { useState, useRef } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";

import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import croix from "../img/bon_coin/croix.svg";
import Modal_window from "./modal";
import { Modal, Overlay } from "react-bootstrap";
const OverlayLoca = (props) => {
  const [open, setOpen] = React.useState(false);
  const target = useRef(null);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <>
      {/* <span onClick={handleOpen} ref={target} className="pointer px-1">Toute la france</span> */}
      <div
        style={{ width: "40%" }}
        style={{ width: "365px", heigth: "40px" }}
        className="pointer p-1 d-flex flex-row bg-light justify-content-between border rounded-pill text-center"
      >
        <span onClick={handleOpen} ref={target} className="px-1">
          Toute la france
        </span>

        <img
          width={16}
          height={16}
          className="bg-light croix"
          src="/img/croix.svg"
        />
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
export default OverlayLoca;
