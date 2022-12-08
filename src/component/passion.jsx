import React from "react";

// function TexteDeFin() {

export default function Passion() {
  return (
    <>
      <div
        style={{ height: "200px", maxWidth: "1100px" }}
        className="mx-3 px-5 py-3 w-100 my-5"
      >
        <div
          style={{
            backgroundColor: "#fef0e9",
            height: "200px",
          }}
          className="position-relative p-2"
        >
          {/* <div className="position-absolute float-right"> */}
          <img
            style={{ bottom: "0px", right: "0px", minWidth: "545px" }}
            id="img_communaute"
            src="/img/communaute.png"
            className="position-absolute float-right"
          />
          {/* </div> */}
          <div
            id="colonne_gauche_commu"
            style={{ height: "200px", maxWidth: "1100px" }}
            className="position-absolute float-left"
          >
            <div style={{ top: "0px" }} className="float-left text-left">
              <h5 className="text-left">Avoir une passion c'est bien</h5>
              <h5 className="text-left">
                Le partager avec les autres c'est mieux
              </h5>
              <div>
                Jardinage, mode, vélo... , ils sont nombreux à en parler sur la
                Communauté leboncoin ! Rejoignez-les !
              </div>
              <div
                style={{ textAlign: "center", width: "200px" }}
                className="orange  border rounded mt-3 p-1 text-white text-center"
              >
                <h6 className="m-auto">Découvrir la communauté</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TexteDeFin /> */}
    </>
  );
}
