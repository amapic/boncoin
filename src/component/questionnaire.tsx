import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import croix from "../img/bon_coin/croix.svg";
import Modal_window from './modal';
import { Modal, Overlay } from "react-bootstrap";
const Questionnaire = () => {
    const [open, setOpen] = React.useState(false);
    const target = useRef(null);
    // const router = useRouter()

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        console.log(open);
        setOpen(!open);
    }
    return (
        <div style={{ width: "930px" }} className="card_perso">
            <div className="d-flex flex-row">
                <div>
                    <input type="radio"></input><span style={{ fontSize: "12px" }}>Offre</span>
                </div>
                <div>
                    <input type="radio"></input><span style={{ fontSize: "12px" }}>Demande</span>
                </div>
            </div>
            {/* Partie Recherche */}
            <div style={{ height: "40px" }} className="d-flex flex-row m-2 justify-content-between align-items-center">
                <div className="A d-flex flex-row h-100 rounded bg-light mr-2">
                    <div className="C px-3 d-flex flex-row rounded bg-light  justify-content-between align-items-center">
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
                    <div className="D d-flex flex-row border-left  mr-2 justify-content-between align-items-center">
                        <div>
                            <Image
                                width={24}
                                height={24}
                                src={loupe} />
                        </div>
                        Que recherchez-vous ?

                    </div>
                </div >
                <div className="B d-flex flex-row px-3 h-100 rounded bg-light justify-content-between align-items-center">
                    <div style={{ width: "40%" }} className="p-1 d-flex flex-row bg-light justify-content-between border rounded-pill text-center">
                        <span className="px-1">Toute la france</span>

                        <Image
                            width={16}
                            height={16}
                            src={croix} />
                    </div>
                    <div className='justify-content-center align-items-center'>
                        <Image
                            width={16}
                            height={16}
                            src={fleche_bas_2} />
                    </div>
                </div>
            </div>
            <div id="prix" style={{ width: "6%" }} className="bg-light rounded-pill p-2 m-2 text-center">
                <a href="#" ref={target} onClick={handleOpen}>
                    Prix
                </a>
                {<Overlay rootClose target={target.current} show={open} placement="right">
                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                padding: '2px 10px',
                                color: 'black',
                                width: "300px",
                                borderRadius: 3,
                                ...props.style,

                            }}
                        >
                            <span style={{ fontSize: "16px" }}>Prix</span>
                            <div className="my-3 d-flex flex-row w-100 justify-content-around">
                                <div className="d-flex flex-column justify-content-between">
                                    <span style={{ fontSize: "14px" }} >Minimum</span>
                                    <span style={{ fontSize: "14px" }}>€</span>
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <span>Maximum</span>
                                    <span>€</span>
                                </div>
                            </div>
                            <div className="my-3">
                                Dons uniquement
                            </div>
                            <div style={{ padding: "20px 17px 20px 17px" }} className="d-flex flex-row justify-content-between">
                                <span>Effacer</span>
                                <span>Valider</span>
                            </div>
                        </div>

                    )
                    }
                </Overlay >}
            </div >
            <div>
                Voir également les annonces disponibles en livraison
            </div>
        </div>
    )
}
export default Questionnaire