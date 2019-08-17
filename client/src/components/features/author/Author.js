import React from "react";
import { PropTypes } from "prop-types";
import "./Author.scss";

const Author = ({ name }) => <div className="name">Author: {name}</div>;

Author.propTypes = {
    name: PropTypes.string
};

export default Author;
