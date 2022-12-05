import React from "react";

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
          className="position-absolute p-2"
        >
          <div
            id="colonne_gauche_commu"
            style={{ height: "200px", maxWidth: "1100px" }}
            className="position-relative"
          >
            <div
              style={{ top: "0px" }}
              className="w-50  float-left text-left position-relative"
            >
              <h5 className="text-left">Avoir une passion c'est bien</h5>
              <h5 className="text-left">
                Le partager avec les autres c'est mieux
              </h5>
              <div>
                Jardinage, mode, vélo... , ils sont nombreux à en parler sur la
                Communauté leboncoin ! Rejoignez-les !
              </div>
              <div
                style={{ textAlign: "center" }}
                className="orange w-100 border rounded mt-3 p-1 text-white text-center"
              >
                <h6 className="m-auto">Découvrir la communauté</h6>
              </div>
            </div>
          </div>
          <img
            style={{ bottom: "0px", right: "0px" }}
            id="img_communaute"
            src="/img/communaute.png"
            className="w-50 float-right position-relative"
          />
        </div>
      </div>
      <div style={{ fontSize: "12px" }} className="text-center m-3 px-5 py-3 ">
        Avec leboncoin, trouvez la bonne affaire sur le site référent de petites
        annonces de particulier à particulier et de professionnels. Avec des
        millions de petites annonces, trouvez la bonne occasion dans nos
        catégories voiture, immobilier, emploi, location de vacances, vêtements,
        meubles, bricolage, téléphonie, jeux vidéo, etc… Déposez une annonce
        gratuite en toute simplicité pour vendre, rechercher, donner vos biens
        de seconde main ou promouvoir vos services. Achetez en toute sécurité
        avec notre système de paiement en ligne et de livraison pour les
        annonces éligibles.
      </div>
    </>
  );
}
