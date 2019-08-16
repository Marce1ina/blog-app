import React from "react";
import SinglePost from "../../features/singlePost/SinglePostContainer";

const SinglePostPage = ({ match }) => <SinglePost postId={match.params.id} />;

export default SinglePostPage;
