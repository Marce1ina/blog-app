import React from "react";
import { PropTypes } from "prop-types";
import "./PostSummary.scss";
import HtmlBox from "../../common/htmlBox/HtmlBox";
import { cutText } from "../../../utils/string";
import Button from "../../common/Button/Button";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import { Link } from "react-router-dom";

const PostSummary = ({ title, content, id }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Link to={`/posts/${id}`}>
            <Button variant="primary">Read more</Button>
        </Link>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
};

export default PostSummary;
