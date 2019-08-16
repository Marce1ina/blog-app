import { connect } from "react-redux";
import { getPosts, getRequest, loadPostsRequest, getPostsCount } from "../../../redux/postsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
    posts: getPosts(state),
    postsCount: getPostsCount(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
