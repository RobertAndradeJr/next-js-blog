import { useRouter } from "next/router";
import withLayout from "../components/withLayout";

const Page = () => {
  const {
    query: { title }
  } = useRouter();

  return (
    <>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default withLayout(Page);
