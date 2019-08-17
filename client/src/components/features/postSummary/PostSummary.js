import React from "react";
import { PropTypes } from "prop-types";
import "./PostSummary.scss";
import HtmlBox from "../../common/htmlBox/HtmlBox";
import { cutText } from "../../../utils/string";
import Button from "../../common/Button/Button";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import { Link } from "react-router-dom";
import Author from "../author/Author";

const PostSummary = ({ title, content, id, author }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <Author name={author} />
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Link to={`/posts/${id}`}>
            <Button variant="primary">Read more</Button>
        </Link>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default PostSummary;
