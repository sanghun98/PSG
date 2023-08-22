/* eslint-disable no-nested-ternary */
import React from "react";
import "./IntroMiddle.css";
import { Link } from "react-router-dom";
import Post from "./component/Post";
import Event from "./component/Event";
import img1 from "./component/images/img1.jpg";
import img2 from "./component/images/img2.jpg";
import img3 from "./component/images/im3.jpg";
import img4 from "./component/images/img4.jpg";
import img5 from "./component/images/img5.jpg";
import img6 from "./component/images/img6.jpeg";
import img7 from "./component/images/img7.jpg";
import img8 from "./component/images/img8.jpg";
import img9 from "./component/images/img9.png";

import img11 from "./component/images/img11.jpg";
import card1 from "./component/images/card1.jpg";
import card2 from "./component/images/card2.png";
import Card from "./component/Card";

export default function IntroMiddle() {
  const data = [
    {
      type: 1,
      title: "HANDBALL",
      date: "August 5th 2023",
      comment: "No Comment Handball -Japan sepcial(23-24)",
      link: "https://en.psg.fr/teams/first-team/content/this-is-paris-saint-germain-2023-2024-episode-1",
      img: img3,
    },
    {
      type: 1,
      title: "FIRST TEAM",
      date: "August 4th 2023",
      comment: "No comment: Japan and Korea Tour 2023 Special",
      img: img4,
    },
    {
      type: 1,
      title: "FIRST TEAM",
      date: "August 4th 2023",
      comment: "Paris Saint-Germain rounds off Japan and Korea Tour in style",
      img: img5,
    },
    {
      type: 2,
      title: "Relive the Paris Saint-Germain Tour in Japan!",
      comment: "Discover",
      img: img6,
      link: "https://en.psg.fr/teams/first-team/japan-tour-2023",
    },
    {
      type: 1,
      title: "WOMEN",
      date: "August 4th 2023",
      comment:
        "Bachmann and Calligaris’ Switzerland knocked out in the Round of 16",
      img: img11,
      link: "https://en.psg.fr/teams/womens-team/content/bachmann-and-calligaris-switzerland-knocked-out-in-the-round-of-16-women-s-world-cup-2023-2024-paris-saint-germain",
    },
    {
      type: 1,
      title: "WOMEN",
      date: "August 4th 2023",
      comment: "The best of the women's session in pictures",
      img: img7,
      link: "https://en.psg.fr/teams/womens-team/content/the-best-of-the-womens-session-in-pictures-paris-saint-germain-feminines-2023-2024",
    },
    {
      type: 1,
      title: "FISRT TEAM",
      date: "August 4th 2023",
      comment: "2023 FIFA Women's World Cup:Our Parisians' story so far",
      img: img8,
      link: "https://en.psg.fr/teams/womens-team/content/2023-fifa-womens-world-cup-our-parisians-story-so-far",
    },
    {
      type: 1,
      title: "FIRST TEAM",
      date: "August 4th 2023",
      comment: "Thank you Korea!",
      img: img9,
      link: "https://en.psg.fr/teams/first-team/content/thank-you-korea",
    },

    {
      type: 3,
      img: card1,
      title:
        "The Parc des Princes Night Sessions, an unmissable summer experience!",
      comment: "BOOK MY TOUR",
      link: "https://stadiumtour.psg.fr/en/acheter/stadium-tour-night-sessions-grand-public-2024-6239/calendar?utm_source=Website&utm_medium=Display&utm_campaign=20230707_ST_B2C_GEN_VD_ST_Night-Sessions-Site-Media-bandeau_EN_EN",
    },
    {
      type: 3,
      img: card2,
      title: "Up to 40% off",
      comment: "SAVE NOW",
      link: "https://store3.psg.fr/en/paris-saint-germain-sale-items/t-47190337+os-23+z-902562-561469836?_s=bm-FI-PSC-PSG-EN-Desktop-Story",
    },
  ];

  return (
    <div className="container">
      <div className="grid-div">
        <Link
          className="Fisrtteam-div"
          to="https://en.psg.fr/teams/first-team/content/this-is-paris-saint-germain-2023-2024-episode-1"
        >
          <div className="img1-div">
            <div className="img1-top">
              <span>PSG TV PREMIUM</span>
            </div>
            <img src={img1} alt="" />
          </div>
          <div className="comment-top">
            <div className="comtop-top">
              <span>FIRST TEAM</span>
              <span className="August-5th">
                <span>August 5th 2023</span>
              </span>
            </div>
            <div className="comtop-bottom">
              <h3>This is Paris 2023-2024:Episode 1</h3>
            </div>
          </div>
        </Link>
        <Link
          className="Secondteam-div"
          to="https://en.psg.fr/teams/womens-team/content/the-womens-world-cup-last-16-incoming-fifa-australia-new-zealand-2023"
        >
          <div className="img1-div">
            <img src={img2} alt="" />
          </div>
          <div className="comment-top">
            <div className="comtop2">
              <span>WOMEN</span>
              <span className="August-5th">
                <span>August 5th 2023</span>
              </span>
            </div>
            <div className="comtop-bottom">
              <h3>The Women&apos;s World Cup Last 16 incoming!</h3>
            </div>
          </div>
        </Link>
        <div className="Third-div">
          {/* 첫번째 */}
          <div>
            <div>
              <div className="tirdiv">
                <a href="https://en.psg.fr/teams/womens-team/content/bachmann-and-calligaris-switzerland-knocked-out-in-the-round-of-16-women-s-world-cup-2023-2024-paris-saint-germain">
                  <span>
                    Bachmann and Calligaris&apos;Switzerland knocked out in the
                    Round of 16
                  </span>
                </a>
              </div>
              <div className="comtop2">
                <span>WOMEN</span>
                <span className="August-5th">
                  <span>August 5th 2023</span>
                </span>
              </div>
            </div>
          </div>
          {/* 두번째 */}
          <div>
            <div>
              <div className="tirdiv">
                <a href="https://en.psg.fr/teams/first-team/content/yoram-zague-signs-his-first-professional-contract-psg-first-team-youth-teams-centre-de-formation">
                  <span>Yoram Zague signs his first professional contract</span>
                </a>
              </div>
              <div className="comtop-top">
                <span>FIRST TEAM</span>
                <span className="August-5th">
                  <span>August 5th 2023</span>
                </span>
              </div>
              <div />
            </div>
          </div>
          {/* 세번째 */}
          <div>
            <div>
              <div className="tirdiv">
                <a href="https://en.psg.fr/teams/first-team/content/ligue-1-matchday-4-fixtures-202324-olympique-lyonnais-paris-saint-germain">
                  <span> Lyon-Paris on 03/09 at 8:45pm</span>
                </a>
              </div>
              <div className="comtop-top">
                <span>FIRST TEAM</span>
                <span className="August-5th">
                  <span>August 5th 2023</span>
                </span>
              </div>
              <div />
            </div>
          </div>
        </div>
        {/* 아래 작은 grid */}
        {data.map((v, i) => {
          return v.type === 1 ? (
            <Post
              key={i}
              link={v.link}
              img={v.img}
              title={v.title}
              date={v.date}
              comment={v.comment}
            />
          ) : v.type === 2 ? (
            <Event
              key={i}
              link={v.link}
              img={v.img}
              title={v.title}
              comment={v.comment}
            />
          ) : (
            <Card
              key={i}
              link={v.link}
              img={v.img}
              title={v.title}
              comment={v.comment}
            />
          );
        })}
      </div>
      <div className="mid-bottom">
        <h3>VIEW MORE:</h3>
        <ul>
          <li>
            <a href="https://en.psg.fr/teams/first-team/news">FIRST TEAM</a>
          </li>
          <li>
            <span className="divide">|</span>
          </li>
          <li>
            <a href="https://en.psg.fr/teams/womens-team/news">
              WOMEN&apos;S TEAM
            </a>
          </li>
          <li>
            <span className="divide">|</span>
          </li>
          <li>
            <a href="https://en.psg.fr/teams/handball/news">HANDBALL</a>
          </li>
          <li>
            <span className="divide">|</span>
          </li>
          <li>
            <a href="https://en.psg.fr/club/news">CLUB</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
