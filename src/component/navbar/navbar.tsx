import { useState, useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import github from "../../img/bon_coin/github.svg";
import loupe from "../../img/bon_coin/loupe.svg";
import bon_coin from "../../img/bon_coin/bon_coin.svg";
import menu from "../../img/bon_coin/menu.svg";
import perso from "../../img/bon_coin/perso.svg";
import coeur from "../../img/bon_coin/coeur.svg";
import msg from "../../img/bon_coin/msg.svg";
import cloche from "../../img/bon_coin/cloche.svg";
import plus from "../../img/bon_coin/plus.svg";
// import linkedin from "../../img/linkedin.png";

// import { motion } from 'framer-motion';
import shortid from 'shortid'
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";

export function Navbar(props: any) {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    // console.log("rr");
    scrollY.onChange(v => {
      // console.log("hh", v);

      if (v > 0) {
        controls.start("pasenhaut")
        // console.log("pasenhaut");
      }
      if (v === 0) {
        controls.start("enhaut")
        // console.log("enahut");
      }
    });

  }, []);


  return (

    <nav className="">

      {props.children}
    </nav>

  );
}



export function NavItem(props: any) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()


  let hover: string = ""
  let hover_planet: string = ""
  hover_planet = router.pathname === '/planet' ? "nav-item noselect nav_item_selected" : "nav-item noselect"
  hover = router.pathname === '/planet' ? "nav-item noselect" : "nav-item noselect nav_item_selected"
  return (
    <>

      <div className="d-flex flex-row justify-content-between">
        <div id="bloc1" className="d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center">
            <Image
              width={140}
              height={24}
              src={bon_coin} />
          </div>
          <div>
            <div style={{ height: "40px", backgroundColor: "#ff6e14" }} className="justify-content-center align-items-center border rounded d-flex flex-row p-1">
              <div className="m-2">
                <Image
                  width={24}
                  height={24}
                  src={plus} />
              </div>
              <div style={{ color: "#fff", fontSize: "1.4rem" }} >
                Déposer une annonce
              </div>
            </div>
            {/* <div className="img_navbar">
              Déposer une annonce
            </div> */}
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={loupe} />
            </div>
            <div style={{ fontSize: "1.4rem" }} >
              Rechercher
            </div>
          </div>
        </div>

        <div id="bloc2" className="d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={cloche} />
            </div>
            <div style={{ fontSize: "1.2rem" }} className="txt_sous_img_navbar">
              Mes recherches
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={coeur} />
            </div>
            <div style={{ fontSize: "1.2rem" }} className="txt_sous_img_navbar">
              Favoris
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={msg} />
            </div>
            <div style={{ fontSize: "1.2rem" }} className="txt_sous_img_navbar">
              Messages
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={perso} />
            </div>
            <div style={{ fontSize: "1.2rem" }} className="txt_sous_img_navbar">
              Se connecter
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
