import React from "react";

function Div_Col_footer({ children }) {
  return <div className="w-50 pe-3">{children}</div>;
}

function BasFooter() {
  return (
    <div className="d-flex w-100 bt-5">
      <div className="d-flex w-50 col_footer_wrap">
        <Div_Col_footer>
          <div>
            <span className="titre_categories">OUEST</span>
            {/* <br /> */}
            <p>
              Basse-Normandie <br />
              Bretagne <br />
              Pays de la Loire <br />
              Poitou-Charentes <br />
            </p>
            <div className="border-cate"></div>
            <span className="titre_categories">SUD-OUEST</span>
            <p>
              <br />
              Aquitaine Midi-Pyrénées <br />
            </p>
          </div>
        </Div_Col_footer>
        <Div_Col_footer>
          <span className="titre_categories">SUD-EST</span>
          <p>
            {/* <br /> */}
            Corse
            <br />
            Languedoc-Roussillon
            <br />
            Provence-Alpes-Côte d'Azur
            <br />
            Rhône-Alpes
            <br />
          </p>
          <div className="border-cate"></div>
          <span className="titre_categories">EST</span>
          <p>
            {/* <br /> */}
            Alsace
            <br />
            Bourgogne
            <br />
            Champagne-Ardenne <br />
            Franche-Comté <br />
            Lorraine
            <br />
          </p>
        </Div_Col_footer>
      </div>
      {/* </div> */}
      {/* // </div> */}
      <div className="d-flex w-50 col_footer_wrap">
        {/* <div> */}
        {/* <div className="pe-3 col_footer"> */}
        <Div_Col_footer>
          <span className="titre_categories">NORD</span>
          <p>
            {/* <br /> */}
            Haute-Normandie
            <br />
            Nord-Pas-de-Calais
            <br />
            Picardie
            <br />
          </p>
          <div className="border-cate"></div>
          <span className="titre_categories">CENTRE</span>
          <p>
            <br />
            Auvergne
            <br />
            Centre Ile-de-France
            <br />
            Limousin
            <br />
          </p>
        </Div_Col_footer>
        {/* </div> */}
        <Div_Col_footer>
          {/* <div className="pe-3 col_footer"> */}
          <span className="titre_categories">DROM</span>
          <p>
            {/* <p> */}
            {/* <br /> */}
            Guadeloupe
            <br />
            Martinique
            <br />
            Guyane
            <br />
            Réunion
            <br />
          </p>
          {/* </div> */}
        </Div_Col_footer>
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
}
export default function HautFooter() {
  return (
    <div className="footer_categories p-2 ps-10">
      <div className="d-flex w-100">
        <div className="d-flex w-50 col_footer_wrap">
          {/* <div className="pe-3"> */}
          <Div_Col_footer>
            {/* <div className="w-25 pe-3 col_footer"> */}
            <div>
              <span className="titre_categories">EMPLOI</span>
              <p>
                Offres d'emploi
                <br />
                Offres d'emploi Cadres
                <br />
                Formations <br />
                Professionnelles
              </p>

              <div className="border-cate"></div>
              <span className="titre_categories">VÉHICULES</span>
              <p>
                Voitures
                <br />
                Motos <br />
                Caravaning
                <br />
                Utilitaires
                <br />
                Camions
                <br />
                Nautisme
                <br />
                Équipement auto
                <br />
                Équipement moto <br />
                Équipement caravaning <br />
                Équipement nautisme
                <br />
              </p>
              <div className="border-cate"></div>
              <span className="titre_categories">IMMOBILIER</span>
              <p>
                Ventes immobilières <br />
                Immobilier Neuf <br />
                Locations Colocations <br />
                Bureaux & Commerces <br />
              </p>
            </div>
            {/* </div> */}
          </Div_Col_footer>
          {/* <div className="pe-3"> */}
          <Div_Col_footer>
            {/* <div> */}
            <span className="titre_categories"> VACANCES </span>
            <p>
              Locations & Gîtes <br />
              Chambres d'hôtes <br />
              Campings Hébergements
              <br />
              Insolites <br />
              Hôtels <br />
              Ventes privées <br />
              Locations en Espagne <br />
            </p>
            <div className="border-cate"></div>
            <span className="titre_categories">LOISIRS</span>
            <p>
              DVD - Films <br />
              CD - Musique <br />
              Livres Vélos Sports & Hobbies <br />
              Instruments de musique <br />
              Collection Jeux & Jouets Vins & Gastronomie <br />
            </p>
            <div className="border-cate"></div>
            <span className="titre_categories">ANIMAUX</span>
            <p>Animaux</p>
            {/* </div> */}
            {/* </div> */}
          </Div_Col_footer>
        </div>
        <div className="d-flex w-50 col_footer_wrap">
          {/* <div className="pe-3 col_footer"></div> */}

          {/* <div className="pe-3"> */}
          <Div_Col_footer>
            <div>
              <span className="titre_categories">MODE</span>
              <p>
                Vêtements <br />
                Chaussures <br />
                Accessoires & Bagagerie <br />
                Montres & Bijoux <br />
                Équipement bébé <br />
                Vêtements bébé <br />
                Luxe et Tendance
              </p>
              <div className="border-cate"></div>
              <span className="titre_categories">MULTIMÉDIA</span>
              <p>Informatique Consoles & Jeux vidéo Image & Son Téléphonie</p>
              <div className="border-cate"></div>
              <span className="titre_categories">SERVICES</span>
              <p>
                Prestations de services <br />
                Billetterie Évènements <br />
                Cours particuliers
                <br />
                Covoiturage <br />
              </p>
            </div>
          </Div_Col_footer>
          {/* </div> */}
          {/* <div className="pe-3"> */}
          <Div_Col_footer>
            <div>
              <span className="titre_categories">MAISON</span>
              <p>
                Ameublement <br />
                Électroménager <br />
                Arts de la table <br />
                Décoration <br />
                Linge de maison <br />
                Bricolage <br />
                Jardinage
              </p>
              <div className="border-cate"></div>
              <span className="titre_categories"> MATÉRIEL PROFESSIONNEL</span>
              <p>
                Matériel agricole <br />
                Transport - Manutention <br />
                BTP - Chantier gros-oeuvre <br />
                Outillage - Matériaux 2nd-oeuvre <br />
                Équipements industriels <br />
                Restauration - Hôtellerie <br />
                Fournitures de bureau <br />
                Commerces & Marchés <br />
                Matériel médical Matériel médical
              </p>
              <div className="border-cate"></div>
              <span className="titre_categories">DIVERS</span>
              <p>Autres</p>
            </div>
          </Div_Col_footer>
        </div>
      </div>
      {/* </div> */}
      {/* // </div> */}
      <div className="border-cate"></div>
      <BasFooter />
    </div>
  );
}
