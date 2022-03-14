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
const OverlayCate = ({ open, target }) => {
    // const [open, setOpen] = React.useState(false);
    // const target = useRef(null);
    // const router = useRouter()

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        console.log(open);
        setOpen(!open);
    }
    return (
        {< Overlay rootClose target = { target.current } show = { open } placement = "right" >
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
    )
}
export default OverlayCate