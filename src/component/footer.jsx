import React from "react";

import Image from 'next/image'



export default function Footer() {

    return (
        <div id="footer">
            <div className="d-flex">
                <div className="w-25 pe-3">
                    <span className="titre_footer">A PROPOS DU BON COIN</span>
                    <p>
                        Qui sommes-nous ?<br />
                        Nous rejoindre<br />
                        Acteur responsable de l’économie française<br />
                        L’Avenir a du bon<br />
                        Le bon observatoire<br />
                    </p>

                    {/* <div className="border-cate"></div> */}
                    <span className="titre_footer" >NOS APPLICATIONS</span>
                    <p>
                        Voitures<br />
                        Motos<br />
                        Caravaning<br />
                        Utilitaires<br />
                        Camions<br />
                        Nautisme<br />
                        Équipement auto<br />
                        Équipement moto<br />
                        Équipement caravaning<br />
                        Équipement nautisme<br />
                    </p>


                </div>
                <div className="w-25 pe-3">
                    <span className="titre_footer"> INFORMATIONS LEGALES </span>
                    <p>
                        Conditions générales d’utilisation<br />
                        Règles de diffusion, de référencement et de déréférencement<br />
                        Conditions générales de vente<br />
                        Vie privée / cookies<br />
                        Vos droits et obligations<br />
                        Critères de classement<br />
                        Décisions de justice<br />
                    </p>

                </div>
                <div className="w-25 pe-3">
                    <span className="titre_footer">NOS SOLUTIONS PROS</span>
                    <p>
                        Vêtements<br />
                        Chaussures<br />
                        Accessoires & Bagagerie<br />
                        Montres & Bijoux<br />
                        Équipement bébé<br />
                        Vêtements bébé<br />
                        Luxe et Tendance<br />
                    </p>

                </div>

                <div className="w-25 pe-3">
                    <span className="titre_footer">DES QUESTIONS ?</span>
                    <p>
                        Aide<br />
                        Le service de paiement sécurisé et la livraison<br />
                        Le service de réservation de vacances en ligne pour les hôtes<br />
                        Votre dossier de location en ligne<br />
                        Demandez conseil à la Communauté<br />
                        Statut de nos services<br />
                    </p>
                    <div className="border-cate"></div>
                    <span className="titre_footer"> VOUS ÊTES À L’ÉTRANGER ?</span>
                    <p>
                        Matériel agricole<br />
                        Transport - Manutention<br />
                        BTP - Chantier gros-oeuvre<br />
                        Outillage - Matériaux 2nd-oeuvre<br />
                        Équipements industriels<br />
                        Restauration - Hôtellerie<br />
                        Fournitures de bureau<br />
                        Commerces & Marchés<br />
                        Matériel médical<br />
                    </p>

                </div>
            </div>
            <div className="border-cate"></div>



        </div >



    )
}