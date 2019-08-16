import React from "react";
import { PropTypes } from "prop-types";
import "./PostSummary.scss";
import HtmlBox from "../../common/htmlBox/HtmlBox";
import { cutText } from "../../../utils/string";
import Button from "../../common/Button/Button";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import { withRouter } from "react-router-dom";

const PostSummary = withRouter(({ history, title, content, id }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Button onClick={() => history.push(`posts/${id}`)} variant="primary">
            Read more
        </Button>
    </article>
));

PostSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
};

export default PostSummary;
