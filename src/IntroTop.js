import React from "react";
import { Link } from "react-router-dom";
import introtop from "./component/images/introtop.jpg";
import "./IntroTop.css";
import junbuklogo from "./component/images/jeonbuklogo.png";
import psglogo from "./component/images/psglogo.png";

export default function IntroTop() {
  return (
    <div className="introtop">
      <div className="intop-left">
        <Link to="https://en.psg.fr/teams/first-team/content/the-parisians-bid-korea-farewell-with-a-win-match-report-jeonbuk-hyundai-motors-fc-paris-saint-germain-coupang-play-series-korea-tour-2023-2024">
          <img className="topimg" src={introtop} alt="" />
        </Link>
      </div>
      <div className="intop-right">
        <div className="inright-top">
          <span>FIRST TEAM</span>
          <h1>The Parisians bid Korea farewell with a win!</h1>
          <span className="introarrow" />
        </div>
        <Link
          className="inright-bottom"
          to="https://en.psg.fr/teams/first-team/fixtures-and-results/202324/jeonbuk-hyundai-motors-v-paris-saint-germain"
        >
          <div className="rb-left">
            <div className="rbl-top">
              <div>
                <img className="junbuk" src={junbuklogo} alt="" />
                <img className="paris" src={psglogo} alt="" />
              </div>
              <div>
                <span>JEONBUK</span>
                <span>Paris</span>
              </div>
            </div>
            <div className="rbl-bottom">
              <span>FULL TIME - FRIENDLY</span>
            </div>
          </div>
          <div>
            <div>
              <div className="scoreboxwrap">
                <div className="scorebox0">0</div>
                <div className="scorebox3">3</div>
              </div>
              <div>
                <div>
                  <button className="viewbtn" type="button">
                    VIEW MATCH CENTRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
