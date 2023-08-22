/* eslint-disable react/style-prop-object */
import React from "react";
import "./IntroBottom.css";
import { Link } from "react-router-dom";
import beinsport from "./component/images/beinsport logo.png";
import img1 from "./component/images/img1.jpg";
import img3 from "./component/images/im3.jpg";
import img4 from "./component/images/img4.jpg";
import img9 from "./component/images/img9.png";
import img10 from "./component/images/img10.jpg";
import BtmPost from "./component/BtmPost";

export default function IntroBottom() {
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
      comment: "Thank you Korea!",
      img: img9,
      link: "https://en.psg.fr/teams/first-team/content/thank-you-korea",
    },
    {
      type: 1,
      title: "FIRST TEAM",
      date: "August 4th 2023",
      comment: "Hello Korea 2023:Episode 2",
      img: img10,
      link: "https://en.psg.fr/teams/first-team/content/thank-you-korea",
    },
  ];

  return (
    <div className="b-wrap">
      <div className="b-top">
        <div className="bt-left">
          <h2>PSG TV</h2>
          <ul>
            <li>
              <a href="https://en.psg.fr/psg-tv/highlights-10mn">
                HIGHLIGHTS 10MN
              </a>
            </li>
            <li>
              <a href="https://en.psg.fr/psg-tv/matches">MATCHES</a>
            </li>
            <li>
              <a href="https://en.psg.fr/psg-tv/this-is-paris">THIS IS PARIS</a>
            </li>
            <li>
              <a href="https://en.psg.fr/psg-tv/training">TRAINING</a>
            </li>
          </ul>
        </div>
        <div className="bt-right">
          <span>SPONSORED BY</span>
          <a href="https://www.beinsports.com/fr-fr">
            <img src={beinsport} alt="" />
          </a>
        </div>
      </div>
      <div className="b-middle">
        <Link
          className="bm-top"
          to="https://en.psg.fr/teams/first-team/content/this-is-paris-saint-germain-2023-2024-episode-1"
        >
          <div className="bmt-left">
            <img src={img1} alt="" />
          </div>
          <div className="bmt-right">
            <div className="bmtr-top">
              <span>FIRST TEAM</span>
              <span>August 5th 2023</span>
            </div>
            <div className="bmtr-bottom">
              <span>This is Paris 2023-2024:</span>
              <span className="episode1">Episode 1</span>
            </div>
          </div>
        </Link>
        <div className="bm-bottom">
          {data.map((v, i) => {
            return (
              <BtmPost
                key={i}
                link={v.link}
                img={v.img}
                title={v.title}
                date={v.date}
                comment={v.comment}
              />
            );
          })}
        </div>
        <div className="viewbtn2">
          <a href="https://en.psg.fr/psg-tv">VIEW MORE</a>
        </div>
      </div>
      <div className="b-bottom">
        <div className="imgback">
          <div>
            <h2>
              PSG TV <span>PREMIUM</span>
            </h2>
            <div className="strong">
              <span>
                <strong>PSG TV PREMIUM</strong> is the perfect place to
                <strong> catch up on any Paris Saint-Germain game</strong>!
              </span>
              <ul>
                <li>Full match replays</li>
                <li>10&apos; highlights</li>
                <li>Exclusive content</li>
              </ul>
            </div>
            <a className="learnbtn" href="https://en.psg.fr/psg-tv-premium">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
