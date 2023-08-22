import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import { Link } from "react-router-dom";

function Post({ title, date, comment, link, img }) {
  return (
    <Link className="team3-div" to={link}>
      <div className="div-wrap">
        <div>
          <img alt="" src={img} />
        </div>
        <div>
          <div className="comtop-top">
            <span>{title}</span>
            <span className="August-5th">
              <span>{date}</span>
            </span>
          </div>
          <div className="comment">
            <h3>{comment}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
};

export default Post;
