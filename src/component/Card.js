import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, img, link, comment }) {
  return (
    <Link className="card-wrap" to={link}>
      <div className="c-component">
        <div className="c-img">
          <img alt="" src={img} />
        </div>
        <div>
          <div className="c-right">
            <span className="c-title">{title}</span>
            <button type="button" className="c-comment">
              {comment}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
