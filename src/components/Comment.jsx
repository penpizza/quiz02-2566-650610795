import { comments } from "@/libs/comments";


export const Comment = (
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,) => {
  return (
    <div>
      
      {/* map-loop render Reply component here */}
      {comments.map((comment) => (
          <comment
            key = {comment.username}
            username={comment.username}
            userImagePath={comment.userImagePath}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))}
    </div>
  );
};
