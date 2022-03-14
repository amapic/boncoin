
import React, { Suspense } from 'react';
import { Navbar, NavItem } from '../component/navbar/navbar'
import Questionnaire from '../component/questionnaire'
import Recherches_recentes from '../component/recherches_recentes'
import Carousel from '../component/carousel'
// import Total_planete../component/carouselanet/chiffre'
import 'bootstrap/dist/css/bootstrap.css';
// import { liste_planete_par_systeme } from '../fonction/fonction'
// import CountUp from 'react-countup';
// import Login from '../Login/Login';

// const GraphiqueSystemeSolaire = React.lazy(() => import('../component_planet/graph_planet'));
export default function Dashboard(): JSX.Element {
  return (

    <div className="wrapper">
      <React.StrictMode>
        <div id="content" style={{ width: '100%', height: "60px" }} >
          <div style={{ width: '100%', margin: 'auto', height: "60px" }} className="menu">
            <div style={{ width: '80%', margin: 'auto', }}>
              <Navbar  >
                <NavItem  >
                </NavItem>
              </Navbar>
            </div>
          </div>
          <div style={{ fontSize: "24px" }} className="pt-5 pb-5 w-100 m-auto text-center">
            Des millions de petites annonces et autant d’occasions de se faire plaisir
          </div>
          <Questionnaire />
          {/* <Recherches_recentes /> */}
          {/* <Carousel /> */}
          {/* Recherches récentes */}
        </div >
      </React.StrictMode >
    </div >
  )
}
