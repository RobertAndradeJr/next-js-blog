import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Page = () => {
  const {
    query: { title }
  } = useRouter();

  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
