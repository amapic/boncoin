import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";

const Questionnaire = () => {

    return (
        <div style={{ width: "890px" }} className="card_perso">
            <div className="d-flex flex-row">
                <div>
                    <input type="radio"></input>Offre
                </div>
                <div>
                    <input type="radio"></input>Demande
                </div>
            </div>
            {/* Partie Recherche */}
            <div className="d-flex flex-row m-2">
                <div className="rounded bg-light mr-2 w-50">
                    <div className="px-3 d-flex flex-row rounded bg-light w-20 justify-content-between align-items-center">
                        <div className="">
                            <Image
                                width={16}
                                height={16}
                                src={menu} />
                        </div>
                        Catégories
                        <div>
                            <Image
                                width={16}
                                height={16}
                                src={fleche_bas_1} />
                        </div>
                    </div>
                    <div className=" d-flex flex-row border-left w-30 mr-2 justify-content-between align-items-center">
                        <div>
                            <Image
                                width={24}
                                height={24}
                                src={loupe} />
                        </div>
                        Que recherchez-vous ?

                    </div>
                </div >
                <div className="px-3 w-10 rounded bg-light justify-content-center align-items-center">

                    Toute la france
                    <div className='justify-content-center align-items-center'>
                        <Image
                            width={16}
                            height={16}
                            src={fleche_bas_1} />
                    </div>
                </div>
            </div>
            <div className="bg-light rounded-pill w-10 p-2 m-2 text-center">
                Prix
            </div>
            <div>
                Voir également les annonces disponibles en livraison
            </div>
        </div>
        // </div >
    )
}
export default Questionnaire