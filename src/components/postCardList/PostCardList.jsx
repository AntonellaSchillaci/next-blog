import PostCard from "../postCard";
import styles from "./index.module.scss";

const PostCardList = ({ postList }) => {
  return (
    <div className={styles.PostCardList}>
      {postList.map((post) => (
        <div key={post.id}>
          <PostCard data={post} />
        </div>
      ))}
    </div>
  );
};

export default PostCardList;
