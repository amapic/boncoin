import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import pointer from "../img/bon_coin/pointer.svg";

const Recherches_recentes = () => {

    return (
        <>
            <div className="d-flex flex-row mb-3">
                {/* style={{ paddingBottom: "16px" }} */}
                <div className="d-flex flex-row mr-3">
                    <Image
                        width={24}
                        height={24}
                        src={loupe} />
                </div>
                {/* <span>Recherches récentes</span> */}
                <h4>Recherches récentes</h4>
            </div>
            <div style={{ width: "100%" }} className="d-flex flex-row justify-content-between container">
                <div className="row">
                    <div className="col card_perso d-flex flex-column w-30 p-4">
                        <span style={{ fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>
                        <span className="mb-4">Toutes caté</span>
                        <div className="mb-2">
                            <Image
                                width={12}
                                height={16}
                                src={pointer} />
                            <span className="ml-2">Toute la france</span>
                        </div>
                        <div className="p-3">
                            <Image
                                width={12}
                                height={12}
                                src={pointer} />
                        </div>
                    </div>
                    <div className="col card_perso d-flex flex-column w-30">
                        <span style={{ marginBottom: "8px", fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>

                        Toutes caté
                        Toute la france
                    </div>
                    <div className="col card_perso d-flex flex-column w-30">
                        <span style={{ marginBottom: "8px", fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>

                        Toutes caté
                        Toute la france
                    </div>
                </div>
            </div >
        </>
    )
}
export default Recherches_recentes