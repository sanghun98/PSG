import React from "react";
import PropTypes from "prop-types";
import "./Event.css";
import { Link } from "react-router-dom";

function Event({ title, link, comment, img }) {
  return (
    <Link className="team6-div" to={link}>
      <div className="div-wrap">
        <div>
          <img alt="" src={img} />
        </div>
        <div>
          <div className="e-top">
            <span className="e-title">{title}</span>
          </div>
          <div className="e-comment">{comment}</div>
        </div>
      </div>
    </Link>
  );
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default Event;
