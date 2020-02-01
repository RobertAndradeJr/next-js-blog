import { useRouter } from "next/router";
import withLayout from "../../components/withLayout";

const Post = () => {
  const {
    query: { id }
  } = useRouter();
  return (
    <>
      <h1>{id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default withLayout(Post);
