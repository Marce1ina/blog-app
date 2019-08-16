import React from "react";
import PostForm from "../../features/postForm/PostFormContainer";
import PageTitle from "../../common/PageTitle/PageTitle";

const EditPostPage = ({ match }) => (
    <>
        <PageTitle>Edit post</PageTitle>
        <PostForm postId={match.params.id} />
    </>
);

export default EditPostPage;
