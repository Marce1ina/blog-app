import React from "react";
import { PropTypes } from "prop-types";
import PostsList from "../postsList/PostsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from "../../common/Pagination/Pagination";

class Posts extends React.Component {
    componentDidMount() {
        const { presentPage, loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(postsPerPage, presentPage);
    }

    componentWillUnmount() {
        const { resetRequestState } = this.props;
        resetRequestState();
    }

    loadPostsPage = page => {
        const { loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(postsPerPage, page);
    };

    render() {
        const { posts, postsCount, request, pages, presentPage, pagination } = this.props;
        const { pending, success, error } = request;
        const { loadPostsPage } = this;

        if (pending || success === null) {
            return <Spinner />;
        } else if (!pending && success && postsCount) {
            return (
                <>
                    <PostsList posts={posts} />
                    {pagination && <Pagination pages={pages} onPageChange={loadPostsPage} presentPage={presentPage} />}
                </>
            );
        } else if (!pending && success && !postsCount) {
            return <Alert variant="info">No posts</Alert>;
        } else if (error) {
            return <Alert variant="error">{error}</Alert>;
        }
    }

    static defaultProps = {
        initialPage: 1,
        postsPerPage: 10,
        pagination: true
    };
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    ),
    loadPostByPage: PropTypes.func,
    resetRequestState: PropTypes.func,
    postsCount: PropTypes.number,
    request: PropTypes.shape({
        pending: PropTypes.bool,
        error: PropTypes.string,
        success: PropTypes.bool
    }),
    pages: PropTypes.number,
    presentPage: PropTypes.number,
    postsPerPage: PropTypes.number,
    pagination: PropTypes.bool
};

export default Posts;
