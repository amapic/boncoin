import React, { useState, useRef } from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";

import fleche_bas_1 from "../../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../../img/bon_coin/fleche_bas_2.svg";
import loupe from "../../img/bon_coin/loupe.svg";

import { Modal, Overlay, FormCheck } from "react-bootstrap";

import OverlayCate from "./../overlayCate";
import OverlayLoca from "./../overlayLoca";
import plus from "../../img/bon_coin/plus.svg";

import Hh from "./boutonOrange";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
// }

// function App() {
//   // const [items, setItems] = React.useState(getItems);
//   const [selected, setSelected] = React.useState([]);
//   const [position, setPosition] = React.useState(0);

//   // const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       <Questionnaire />
//     </ScrollMenu>
//   );
// }

const BarreDefilement = () => {};

const CateEtZoneSaisie = () => {
  return (
    <div className="CateZoneSaisie d-flex flex-row h-100 rounded bg-light mr-2">
      <div className="C px-3 d-flex flex-row rounded-right bg-light justify-content-between align-items-center">
        <OverlayCate />
        Catégories
        <div>
          <Image width={16} height={16} src={fleche_bas_1} />
        </div>
      </div>
      <div className="p-3"></div>
      <div className="D d-flex flex-row border-left me-2 justify-content-left align-items-center">
        <div className="p-3">
          <Image width={16} height={16} src={loupe} />
        </div>
        <div className="ms-3 text-secondary">Que recherchez-vous ?</div>
      </div>
    </div>
  );
};

const Geo = () => {
  return (
    <div className="B d-flex flex-row px-3 h-100 rounded bg-light justify-content-between align-items-center">
      <OverlayLoca />
      <div className="justify-content-center align-items-center">
        <Image width={16} height={16} src={fleche_bas_2} />
      </div>
    </div>
  );
};

function BoutonOrange() {
  return (
    <div
      style={{ height: "40px", width: "200px" }}
      className="d-flex d-sm-none d-md-none w-20 m-auto mt-5 px-3 orange justify-content-between align-items-center border rounded d-flex flex-row"
    >
      <div className="ps-2" style={{ color: "#fff", fontSize: "14px" }}>
        Déposer une annonce
      </div>
      <div className="ms-3">
        <Image width={14} height={14} src={plus} />
      </div>
    </div>
  );
}

function BoutonBleu() {
  return (
    <div
      style={{ height: "40px", width: "200px" }}
      className="d-flex d-sm-none d-md-none w-20 m-auto mt-5 px-3 bleu justify-content-between align-items-center border rounded d-flex flex-row"
    >
      <div className="ps-2" style={{ color: "#fff", fontSize: "14px" }}>
        Déposer une annonce
      </div>
      {/* <div className="ms-3">
        <Image width={14} height={14} src={plus} />
      </div> */}
    </div>
  );
}

function BoutonBleusfgs() {
  return (
    <div style={{ height: "40px", width: "200px" }}
       className="position-relative w-20">
      <div className="position-absolute w-100 absolute-center">
        <div
          style={{ height: "40px", width: "200px" }}
          className="pointer d-flex justify-content-center align-items-center position-absolute rounded blue w-25 m-auto"
        >
          <div className="m-auto py-1 h-100 align-middle text-center text-white">
            Rechercher (500 000 résultats)
          </div>
        </div>
      </div>
    </div>
  );
}

const Questionnaire = () => {
  const [open, setOpen] = React.useState(false);
  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [swt, setSwt] = React.useState(true);

  const target = useRef(null);
  const target_question = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleOpenQuestion = () => {
    console.log(open);
    setOpenQuestion(!open);
  };

  return (
    <>
      {/* style={{ width: "930px" }} */}
      <Hh />
      <div className="card_perso m-auto w-100">
        {/* <div className="d-flex flex-row">
                    <div>
                        <input type="radio"></input><span style={{ fontSize: "12px" }}>Offre</span>
                    </div>
                    <div>
                        <input type="radio"></input><span style={{ fontSize: "12px" }}>Demande</span>
                    </div>
                </div> */}
        <form>
          <div className="d-flex flex-row w-25">
            <label className="container d-flex flex-row">
              <input name="contact" type="checkbox" />
              <span className="checkmark"></span>
              <span className="ps-3" style={{ fontSize: "13px" }}>
                Offre
              </span>
            </label>

            <label className="container d-flex flex-row align-items-center">
              <input name="contact" type="checkbox" />
              <span className="checkmark"></span>
              <span className="ps-3" style={{ fontSize: "13px" }}>
                Demande
              </span>
            </label>
          </div>
        </form>
        {/* Partie Recherche */}
        <div
          style={{ height: "40px" }}
          className="d-flex flex-row m-2 justify-content-between align-items-center"
        >
          <div className="A d-flex flex-row h-100 rounded bg-light mr-2">
            <CateEtZoneSaisie />
          </div>

          <div style={{ width: "2%" }}></div>

          <div className="geo_droite">
            <Geo />
          </div>

          {/* <div className="B d-flex flex-row px-3 h-100 rounded bg-light justify-content-between align-items-center">
            <OverlayLoca />
            <div className="justify-content-center align-items-center">
              <Image width={16} height={16} src={fleche_bas_2} />
            </div>
          </div> */}
        </div>
        <div className="d-flex">
          <div className="d-md-none d-xl-none m-auto">
            <Geo />
          </div>
        </div>
        <FormCheck type="switch">
          <FormCheck.Input isInvalid checked={swt} />
        </FormCheck>
        {/* <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                    {/* <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label> */}
        {/* </div> */}
        <div
          id="prix"
          style={{ width: "6%" }}
          className="bg-light rounded-pill p-2 m-2 text-center"
        >
          <a
            href="#"
            style={{ textDecoration: "none", color: "black" }}
            ref={target}
            onClick={handleOpen}
          >
            Prix
          </a>
        </div>

        {
          <Overlay
            rootClose
            onHide={handleClose}
            target={target.current}
            show={open}
            placement="right"
          >
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  padding: "2px 10px",
                  color: "black",

                  borderRadius: 3,
                  ...props.style,
                }}
                className="w-50"
              >
                <div className="px-4 py-3">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "16px" }}
                  >
                    Prix
                  </span>
                  <div className="my-3 d-flex flex-row w-100 justify-content-stretch align-items-stretch">
                    <div className="d-flex flex-column justify-content-left flex-grow-1 pr-2">
                      <span
                        style={{ fontSize: "14px" }}
                        className="mb-1 font-weight-bold"
                      >
                        Minimum
                      </span>
                      {/* <span style={{ fontSize: "14px" }}>€</span> */}
                      <div className="border rounded">€</div>
                    </div>
                    <div className="d-flex flex-column justify-content-left flex-grow-1">
                      <span className="mb-1 font-weight-bold">Maximum</span>
                      <div className="border rounded">€</div>
                    </div>
                  </div>
                </div>
                <div className="px-4 my-3">Dons uniquement</div>
                <div
                  style={{ padding: "20px 17px 20px 17px" }}
                  className="d-flex flex-row justify-content-between"
                >
                  <span onClick={handleClose}>Effacer</span>
                  <span style={{ color: "#FF6E14" }}>Valider</span>
                </div>
              </div>
            )}
          </Overlay>
        }

        <div className="position-relative">
          Voir également les annonces disponibles en livraison
          <img
            ref={target_question}
            onClick={handleOpenQuestion}
            width={16}
            height={16}
            className="ms-2 pointer"
            src="/img/question.svg"
          />
          {
            <Overlay
              rootClose
              onHide={handleCloseQuestion}
              target={target_question.current}
              show={openQuestion}
              placement="bottom"
            >
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  {...props}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    // padding: '2px 10px',
                    color: "black",

                    borderRadius: 3,
                    ...props.style,
                  }}
                  className="w-25 p-3"
                >
                  <h5 className="pt-3 text-justify pb-10">
                    leboncoin vous simplifie la vie !
                  </h5>
                  <span className="pb-10">
                    Grâce au paiement en ligne et à la livraison, vous pouvez
                    chercher la perle rare partout en France ! Achetez en ligne
                    et suivez la livraison de votre colis en toute sérénité avec
                    Mondial Relay et La Poste.
                  </span>
                  <br />
                  En savoir plus sur le service de paiement et de livraison
                  leboncoin
                  <img
                    onClick={handleCloseQuestion}
                    className="pointer croix_recherche"
                    src="/img/croix-grise.svg"
                  />
                </div>
              )}
            </Overlay>
          }
          {/* <div className="position-relative w-100">
            <div className="position-absolute w-100 absolute-center">
              <div
                style={{ height: "40px" }}
                className="pointer d-flex justify-content-center align-items-center position-absolute rounded blue w-25 m-auto"
              >
                <div className="m-auto py-1 h-100 align-middle text-center text-white">
                  Rechercher (500 000 résultats)
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <BoutonBleu />
      {/* <div
        style={{ height: "40px", width: "200px" }}
        className="d-sm-none d-md-none d-xl-none w-20 m-auto mt-5 px-3 orange justify-content-between align-items-center border rounded d-flex flex-row"
      >

        <div
          className="ps-2"
          style={{ color: "#fff", fontSize: "14px" }}
        >
          Déposer une annonce
        </div>
        <div className="ms-3">
          <Image width={14} height={14} src={plus} />
        </div>
      </div> */}
      <BoutonOrange />
    </>
  );
};
export default Questionnaire;
