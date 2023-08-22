import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import nikelogo from "./images/nikelogo.png";
import qatarair from "./images/qatarAirways.png";
import goat from "./images/GOAT-Logo.png";
import visitqatar from "./images/visitqatarlogo.png";
import allcom from "./images/alllogo.png";
import ooredoo from "./images/ooredoologo.png";
import visitrwanda from "./images/visitrwanda.png";
import qnb from "./images/qnblogo.png";
import orange from "./images/orange.png";
import beinsports from "./images/beinsports.png";
import ea from "./images/ea-sports.png";
import aspetar from "./images/logo-aspetar.png";

export default function Footer() {
  return (
    <div>
      <div className="f-top">
        <ul>
          <li>
            <Link to="https://www.nike.com/">
              <img className="nikelogo" src={nikelogo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://www.qatarairways.com/ko-kr/homepage.html">
              <img className="qatarlogo" src={qatarair} alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://www.goat.com/">
              <img className="goatlogo" src={goat} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="f-bottom">
        <div className="fb-top">
          <ul>
            <li>
              <Link to="https://visitqatar.com/">
                <img className="fblogo" src={visitqatar} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://all.accor.com/south-korea/index.ko.shtml">
                <img className="fblogo" src={allcom} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.ooredoo.qa/web/en/">
                <img className="fblogo" src={ooredoo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.visitrwanda.com/">
                <img className="fblogo" src={visitrwanda} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.qnb.com/sites/qnb/qnbglobal/page/en/enqnbglobalnetwork.html">
                <img className="fblogo" src={qnb} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.orange.fr/portail">
                <img className="fblogo" src={orange} alt="" />
              </Link>
            </li>

            <li>
              <Link to="https://www.beinsports.com/fr-fr">
                <img className="fblogo" src={beinsports} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.ea.com/sports">
                <img className="fblogo" src={ea} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.aspetar.com/en/home">
                <img className="fblogo" src={aspetar} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="fb-bottom">
          <div>
            <span>PARIS SAINT-GERMAIN</span>
            <ul className="fbb-ul">
              <li>
                <a href="https://en.psg.fr/teams/first-team/news">Fist team</a>
              </li>
              <li>
                <a href="https://en.psg.fr/teams/womens-team/news">Women</a>
              </li>
              <li>
                <a href="https://en.psg.fr/teams/handball/news">Handball</a>
              </li>
              <li>
                <a href="https://en.psg.fr/psg-tv">PSG TV</a>
              </li>
              <li>
                <a href="https://en.psg.fr/club/news">Club</a>
              </li>
              <li>
                <a href="https://foundation.psg.fr/">
                  Children First / Foundation
                </a>
              </li>
              <li>
                <a href="https://en.psg.fr/club/sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
          <div>
            <span>SERVICES</span>
            <ul className="fbb-ul">
              <li>
                <a href="https://login.psg.fr/17900b24-9824-4148-b1a1-ccfdbaae0d0d/auth-ui/login?__aic_csrf=k15_rbqcekcoBh5l&client_id=e1d04299-f951-4d46-b2fb-b8de86fe2c86&redirect_uri=https%3A%2F%2Fmyaccount.psg.fr%2Fen%2Flogin&response_type=code&scope=openid+profile+email+phone+address&state=23cdd120db91946b24b7ed17c6595455&ui_locales=en">
                  My account
                </a>
              </li>
              <li>
                <a href="https://billetterie.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Footer_PSG">
                  Tickets
                </a>
              </li>
              <li>
                <a href="https://store.psg.fr/en/?_s=bm-FI-PSC-PSG-EN-FooterURL-Desktop">
                  Shop
                </a>
              </li>
              <li>
                <a href="https://en.psg.fr/myparissaintgermain/redblue">
                  MyParis
                </a>
              </li>
              <li>
                <a href="https://stadiumtour.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Footer_PSG_Stadium_Tour">
                  Stadium Tour
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
