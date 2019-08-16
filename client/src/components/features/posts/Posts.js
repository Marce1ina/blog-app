import React from "react";
import { PropTypes } from "prop-types";
import PostsList from "../postsList/PostsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";

class Posts extends React.Component {
    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { posts, postsCount, request } = this.props;
        const { pending, success, error } = request;

        if (pending || success === null) {
            return <Spinner />;
        } else if (!pending && success && postsCount) {
            return <PostsList posts={posts} />;
        } else if (!pending && success && !postsCount) {
            return <Alert variant="info">No posts</Alert>;
        } else if (error) {
            return <Alert variant="error">{error}</Alert>;
        }
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    loadPosts: PropTypes.func.isRequired
};

export default Posts;
