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
import { black } from 'material-ui/styles/colors';
import OverlayCate from './overlayCate'
const Questionnaire = () => {
    const [open, setOpen] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false);
    const target = useRef(null);
    const targetCategories = useRef(null);
    // const router = useRouter()

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        // console.log(open);
        setOpen(!open);
    }

    const handleCloseCategories = () => {
        setOpenCategories(false)
    }

    const handleOpenCategories = () => {
        console.log(open);
        setOpenCategories(!open);
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
                    <div className="C px-3 d-flex flex-row rounded-right bg-light justify-content-between align-items-center">
                        <a className="" href="#" style={{ textDecoration: "none", color: 'black' }} ref={targetCategories} onClick={handleOpenCategories}>
                            <Image
                                width={16}
                                height={16}
                                src={menu} />
                        </a>
                        Catégories
                        <div>
                            <Image
                                width={16}
                                height={16}
                                src={fleche_bas_1} />
                        </div>
                    </div>
                    <div className="p-3"></div>
                    <div className="D d-flex flex-row border-left me-2 justify-content-left align-items-center">
                        <div className="p-3">
                            <Image
                                width={16}
                                height={16}
                                src={loupe} />
                        </div>
                        <div className="ms-3 text-secondary">Que recherchez-vous ?</div>

                    </div>
                </div >
                <div style={{ width: "2%" }}></div>
                <div className="B d-flex flex-row px-3 h-100 rounded bg-light justify-content-between align-items-center">
                    <div style={{ width: "40%" }} className="p-1 d-flex flex-row bg-light justify-content-between border rounded-pill text-center">
                        <span className="px-1">Toute la france</span>

                        {/* <Image
                            width={16}
                            height={16}
                            src={croix} /> */}
                        <img width={16} height={16} className="bg-light croix" src="/img/croix.svg" />
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
                <a href="#" style={{ textDecoration: "none", color: 'black' }} ref={target} onClick={handleOpen}>
                    Prix
                </a>
            </div >
            {<Overlay rootClose onHide={handleClose} target={target.current} show={open} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            padding: '2px 10px',
                            color: 'black',

                            borderRadius: 3,
                            ...props.style,

                        }}
                        className="w-50">

                        <div className="px-4 py-3">
                            <span className="font-weight-bold" style={{ fontSize: "16px" }}>Prix</span>
                            <div className="my-3 d-flex flex-row w-100 justify-content-stretch align-items-stretch">
                                <div className="d-flex flex-column justify-content-left flex-grow-1 pr-2">
                                    <span style={{ fontSize: "14px" }} className="mb-1 font-weight-bold" >Minimum</span>
                                    {/* <span style={{ fontSize: "14px" }}>€</span> */}
                                    <div className="border rounded">€</div>
                                </div>
                                <div className="d-flex flex-column justify-content-left flex-grow-1">
                                    <span className="mb-1 font-weight-bold">Maximum</span>
                                    <div className="border rounded">€</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 my-3">
                            Dons uniquement
                        </div>
                        <div style={{ padding: "20px 17px 20px 17px" }} className="d-flex flex-row justify-content-between">
                            <span onClick={handleClose} >Effacer</span>
                            <span style={{ color: "#FF6E14" }}>Valider</span>
                        </div>
                    </div>

                )
                }
            </Overlay >}

            <div>
                Voir également les annonces disponibles en livraison
            </div>
            <OverlayCate target={targetCategories} open={openCategories} setOpen={handleOpenCategories} setClose={handleCloseCategories} />
        </div>
    )
}
export default Questionnaire