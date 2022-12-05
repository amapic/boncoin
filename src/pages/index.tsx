import React from "react";
import { Navbar, NavItem } from "../component/navbar/navbar";
import Questionnaire from "../component/questionnaire/questionnaire";
import Recherches_recentes from "../component/recherches_recentes";
import Carousel from "../component/carousel2";
import Passion from "../component/passion";
import Liste_Region from "../component/footer1";
import Footer from "../component/footer2";

import "bootstrap/dist/css/bootstrap.css";

export default function Dashboard(): JSX.Element {
  return (
    <div id="wrapper">
      {/* <div id="content" style={{ width: '100%', height: "60px" }} > */}
      <div style={{ height: "250px" }}></div>
      <div style={{ maxWidth: "1100px", margin: "auto" }} className="bg-white">
        <div
          style={{ width: "100%", margin: "auto", height: "60px" }}
          className="menu"
        >
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <Navbar>
              <NavItem></NavItem>
            </Navbar>
          </div>
        </div>
        <div
          style={{ fontSize: "24px" }}
          className="pt-5 pb-5 w-100 m-auto text-center"
        >
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </div>
        <Questionnaire />
        <Recherches_recentes />
        <div className="my-5"></div>
        <Carousel />
        {/* Recherches récentes */}
        <div className="my-5"></div>
        <div
          style={{
            maxWidth: "1066px",
            height: "200px",
          }}
          className="m-auto"
        >
          <Passion />
        </div>
        <div
          style={{ fontSize: "12px", width: "fit-content" }}
          className="text-center m-3 px-5 py-3 "
        >
          Avec leboncoin, trouvez la bonne affaire sur le site référent de
          petites annonces de particulier à particulier et de professionnels.
          Avec des millions de petites annonces, trouvez la bonne occasion dans
          nos catégories voiture, immobilier, emploi, location de vacances,
          vêtements, meubles, bricolage, téléphonie, jeux vidéo, etc… Déposez
          une annonce gratuite en toute simplicité pour vendre, rechercher,
          donner vos biens de seconde main ou promouvoir vos services. Achetez
          en toute sécurité avec notre système de paiement en ligne et de
          livraison pour les annonces éligibles.
        </div>
        );
        <div id="footer_wrapper my-5">
          <Liste_Region />
          <Footer />
        </div>
      </div>
    </div>
  );
}
