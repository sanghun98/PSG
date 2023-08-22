/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parisLogo from "./images/psg-logo.png";
import "./Header.css";
import userlogo from "./images/user_456283.png";
import hopebuying from "./images/hopebuyinglogo.png";
import search from "./images/search.png";

export default function Header() {
  const [isOpen, changeIsOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleIsOpen = () => {
    changeIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 967) {
      const ul = document.getElementsByClassName("listul");
      for (let i = 0; i < ul.length; i += 1) {
        ul[i].style.display = "none";
      }
    }
  };

  const handleScroll = () => {
    const moving = window.scrollY;
    setPosition(moving);
    if (!isOpen && moving > 385 && moving > position) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  const openMenu = (e) => {
    if (
      !e.target.parentNode.childNodes[1].style.display ||
      e.target.parentNode.childNodes[1].style.display === "none"
    ) {
      e.target.parentNode.childNodes[1].style.display = "block";
    } else {
      e.target.parentNode.childNodes[1].style.display = "none";
    }
  };

  const closeScroll = () => {
    const moving = window.scrollY;
    setPosition(moving);
    if (moving > position) {
      changeIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeScroll);
    return () => {
      window.removeEventListener("scroll", closeScroll);
    };
  });

  return (
    <div className={visible ? "header" : "header hide-header"}>
      <div className="h-top">
        <Link to="/" className="a">
          PSG.FR
        </Link>
        <Link
          to="https://billetterie.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG"
          className="a"
        >
          Ticket
        </Link>
        <Link
          to="https://store.psg.fr/en/?_s=bm-FI-PSC-PSG-EN-HeaderURL-Desktop"
          className="a"
        >
          Shop
        </Link>
        <Link className="a" to="https://en.psg.fr/myparissaintgermain/redblue">
          MYPARIS
        </Link>
        <Link
          className="a"
          to="https://stadiumtour.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG_Stadium_Tour"
        >
          STADIUM TOUR
        </Link>
        <Link className="a" to="https://billetterie.psg.fr/en/business/offers">
          BUSINESS
        </Link>
      </div>

      <div className="h-bottom">
        <div className="hb-left">
          <div className="menubar">
            <div
              className={isOpen ? " hamburger open" : " hamburger"}
              onClick={toggleIsOpen}
            >
              <div className="icon" />

              <span>{isOpen ? "CLOSE" : "MENU"}</span>
            </div>
            {/* <button
              type="button"
              className={isOpen ? " hamburger open" : " hamburger"}
            /> */}
          </div>
          <span>|</span>
          <div>
            <Link
              to="https://en.psg.fr/teams/first-team/news"
              className="menuside t"
            >
              FIRST TEAM
            </Link>
            <Link to="https://en.psg.fr/psg-tv" className="menuside">
              PSG TV
            </Link>
            <Link
              to="https://en.psg.fr/teams/first-team/transfers"
              className="menulast"
            >
              TRANSFERS
            </Link>
          </div>
        </div>
        <div className="hb-middle">
          <Link to="/">
            <img className="imglogo" src={parisLogo} alt="" />
          </Link>
        </div>

        <div className="hb-right">
          <Link to="https://login.psg.fr/17900b24-9824-4148-b1a1-ccfdbaae0d0d/auth-ui/login?__aic_csrf=zgjMLD8tApO4n0Rk&claims=%7B%22userinfo%22%3A%7B%22address%22%3Anull%2C%22city%22%3Anull%2C%22country%22%3Anull%2C%22firstname%22%3Anull%2C%22lastname%22%3Anull%7D%2C%22id_token%22%3A%7B%22address%22%3Anull%2C%22city%22%3Anull%2C%22country%22%3Anull%2C%22firstname%22%3Anull%2C%22lastname%22%3Anull%7D%7D&client_id=03087cfb-f51c-4a55-ba34-b5487bcc8f7e&redirect_uri=https%3A%2F%2Fen.psg.fr%2Fakamailogin%2Fcallback&response_type=code&scope=openid+profile+email+address+phone&ui_locales=en">
            <img className="userimg" src={userlogo} alt="" />
          </Link>
          <Link to="/MyCart">
            <img className="hopebuying" src={hopebuying} alt="" />
          </Link>
        </div>
      </div>
      {/* 사이드 메뉴바 */}
      <div className={isOpen ? "mini-menu min-open" : "mini-menu"}>
        <div className="top-search">
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="top-list">
          <ul>
            <li>
              <a href="https://billetterie.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG">
                TICKETS
              </a>
            </li>
            <li>
              <a href="https://store.psg.fr/en/?_s=bm-FI-PSC-PSG-EN-HeaderURL-Desktop">
                SHOP
              </a>
            </li>
            <li>
              <a href="https://en.psg.fr/myparissaintgermain/redblue">
                MYPARIS
              </a>
            </li>
            <li>
              <a href="https://stadiumtour.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG_Stadium_Tour">
                STADIUM TOUR
              </a>
            </li>
            <li>
              <a href="https://billetterie.psg.fr/en/business/offers">
                BUSINESS
              </a>
            </li>
          </ul>
        </div>
        <div className="middle-menu">
          <ul>
            <li className="Fisrt-li">
              <button className="listbtn" onClick={openMenu} type="button">
                FIRST TEAM
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/teams/first-team/news">News</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/first-team/squad">Squad</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/first-team/fixtures-and-results">
                    Fixtures and results
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/first-team/league-table">
                    League table
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/first-team/honours">
                    Honours
                  </a>
                </li>
              </ul>
            </li>
            <li className="Women-li">
              <button className="listbtn" onClick={openMenu} type="button">
                WOMEN
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/teams/womens-team/news">News</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/womens-team/squad">Squad</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/womens-team/fixtures-and-results">
                    Fixtures and results
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/womens-team/league-table">
                    League table
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/womens-team/honours">
                    Honours
                  </a>
                </li>
              </ul>
            </li>
            <li className="Handball-li">
              <button className="listbtn" onClick={openMenu} type="button">
                HANDBALL
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/teams/handball/news">News</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/handball/squad">Squad</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/handball/fixtures-and-results">
                    Fixtures and results
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/handball/league-table">
                    League table
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/teams/handball/partners">
                    Partners
                  </a>
                </li>
              </ul>
            </li>
            <li className="Other-li">
              <button className="listbtn" onClick={openMenu} type="button">
                OTHER TEAMS
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/youth-teams/news">Youth teams</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/esports/about">eSports</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottom-menu">
          <ul>
            <li>
              <button className="listbtn" onClick={openMenu} type="button">
                MEDIA
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/psg-tv">PSG TV</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/psg-tv-premium">PSG TV</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/photos">Photos</a>
                </li>
                <li>
                  <a href="https://podcasts.psg.fr/en">Podcasts</a>
                </li>
              </ul>
            </li>
            <li>
              <button className="listbtn" onClick={openMenu} type="button">
                FANS
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/fans/news">News</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/fans/mobile-app">Mobile app</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/fans/fan-clubs">Fan clubs</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/fans/official-stores">
                    Official stores
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/fans/psg-fan-token">
                    PSG Fan Token
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button className="listbtn" onClick={openMenu} type="button">
                THE CLUB
              </button>
              <ul className="listul">
                <li>
                  <a href="https://en.psg.fr/club/news">News</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/club/nasser-al-khelaifi">
                    President
                  </a>
                </li>
                <li>
                  <a href="https://en.psg.fr/club/sponsors">Sponsors</a>
                </li>
              </ul>
            </li>
            <li>
              <button className="listbtn" onClick={openMenu} type="button">
                MORE
              </button>
              <ul className="listul">
                <li>
                  <a href="https://foundation.psg.fr/">Foundation</a>
                </li>
                <li>
                  <a href="https://en.psg.fr/academy/about-us">Academy</a>
                </li>
              </ul>
            </li>
            <li>
              <button className="listbtn" onClick={openMenu} type="button">
                SHOP
              </button>
              <ul className="listul">
                <li>
                  <a href="https://billetterie.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG">
                    Tickets
                  </a>
                </li>
                <li>
                  <a href="https://store.psg.fr/en/?_s=bm-FI-PSC-PSG-EN-HeaderURL-Desktop">
                    Store
                  </a>
                </li>
                <li>
                  <a href="https://liveauction.psg.fr/?utm_source=psg.fr&utm_medium=GlobalNav&utm_campaign=NavLink-EN&utm_id=GlobalNav+link">
                    Match worn shirts
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-wrap">
        <div className="menu">
          <div className={isOpen ? "menu-back m-open" : "menu-back"}>
            <ul className="ulone">
              <li>
                <span>FIRST TEAM</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/teams/first-team/news">News</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/first-team/squad">Squad</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/first-team/fixtures-and-results">
                      Fixtures and results
                    </a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/first-team/league-table">
                      League table
                    </a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/first-team/honours">
                      Honours
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>WOMEN</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/teams/womens-team/news">News</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/womens-team/squad">
                      Squad
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/womens-team/fixtures-and-results">
                      Fixtures and results
                    </a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/womens-team/league-table">
                      League table
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://en.psg.fr/teams/womens-team/honours">
                      Honours
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>HANDBALL</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/teams/handball/news">News</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/handball/squad">Squad</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/teams/handball/fixtures-and-results">
                      Fixtures and results
                    </a>
                  </li>

                  <li>
                    <a href="https://en.psg.fr/teams/handball/league-table">
                      League table
                    </a>
                  </li>

                  <li>
                    <a href="https://en.psg.fr/teams/handball/honours">
                      Honours
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>OTHER TEAMS</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/youth-teams/news">Youth teams</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/esports/about">eSpots</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>MEDIA</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/psg-tv">PSG TV</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/psg-tv-premium">
                      PSG TV Premium
                    </a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/photos">Photos</a>
                  </li>
                  <li>
                    <a href="https://podcasts.psg.fr/en">Podcasts</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>FANS</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://www.psg.fr/fans/actualite">Actualite</a>
                  </li>
                  <li>
                    <a href="https://www.psg.fr/fans/application-mobile">
                      Application mobile
                    </a>
                  </li>
                  <li>
                    <a href="https://www.psg.fr/fans/fan-clubs">Fan clubs</a>
                  </li>
                  <li>
                    <a href="https://www.psg.fr/fans/boutiques-officielles">
                      Boutiques officielles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.psg.fr/fans/psg-fan-token">
                      PSG FAN Token
                    </a>
                  </li>
                  <li>
                    <a href="https://www.psg.fr/we-run-paris">PSG RUN</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>THE CLUB</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://en.psg.fr/club/news">News</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/club/nasser-al-khelaifi">
                      President
                    </a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/club/sponsors">Sponsors</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>MORE</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://foundation.psg.fr/">Fondation</a>
                  </li>
                  <li>
                    <a href="https://en.psg.fr/academy/about-us">Academy</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="ulone">
              <li>
                <span>SHOP</span>
                <ul className="ultwo">
                  <li>
                    <a href="https://billetterie.psg.fr/en/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG">
                      Tickets
                    </a>
                  </li>
                  <li>
                    <a href="https://store.psg.fr/en/?_s=bm-FI-PSC-PSG-EN-HeaderURL-Desktop">
                      Store
                    </a>
                  </li>
                  <li>
                    <a href="https://liveauction.psg.fr/?utm_source=psg.fr&utm_medium=GlobalNav&utm_campaign=NavLink-EN&utm_id=GlobalNav+link">
                      Match worn shirts
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={isOpen ? "sideback sideopen" : "sideback"}
        onClick={toggleIsOpen}
      />
    </div>
  );
}
