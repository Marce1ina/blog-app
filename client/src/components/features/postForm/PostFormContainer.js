import { connect } from "react-redux";
import {
    getRequest,
    getSinglePost,
    addPostRequest,
    resetRequest,
    loadSinglePostRequest
} from "../../../redux/postsRedux";
import PostForm from "./PostForm";

const mapStateToProps = state => ({
    request: getRequest(state),
    post: getSinglePost(state)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    resetRequestState: () => dispatch(resetRequest()),
    loadSinglePost: postId => dispatch(loadSinglePostRequest(postId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);
