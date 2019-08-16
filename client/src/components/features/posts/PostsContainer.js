import { connect } from "react-redux";
import {
    getPosts,
    getRequest,
    loadPostsByPageRequest,
    getPostsCount,
    resetRequest,
    getPages,
    getPresentPage
} from "../../../redux/postsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
    posts: getPosts(state),
    postsCount: getPostsCount(state),
    request: getRequest(state),
    pages: getPages(state),
    presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
    loadPostsByPage: (postsPerPage, page) => dispatch(loadPostsByPageRequest(postsPerPage, page)),
    resetRequestState: () => dispatch(resetRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
