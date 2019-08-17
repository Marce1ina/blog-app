import React from "react";
import { PropTypes } from "prop-types";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PageTitle from "../../common/PageTitle/PageTitle";
import HtmlBox from "../../common/htmlBox/HtmlBox";
import Author from "../author/Author";

class SinglePost extends React.Component {
    componentDidMount() {
        const { loadPost, postId } = this.props;
        loadPost(postId);
    }

    render() {
        const { post, request } = this.props;
        const { pending, success, error } = request;
        const { title, content, author } = post;

        if (pending || success === null) {
            return <Spinner />;
        } else if (!pending && success) {
            return (
                <div>
                    <PageTitle>{title}</PageTitle>
                    <Author name={author} />
                    <HtmlBox>{content}</HtmlBox>
                </div>
            );
        } else if (error) {
            return <Alert variant="error">{error}</Alert>;
        }
    }
}

SinglePost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string
    }),
    request: PropTypes.shape({
        pending: PropTypes.bool,
        success: PropTypes.bool,
        error: PropTypes.string
    }),
    loadPost: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
};

export default SinglePost;
