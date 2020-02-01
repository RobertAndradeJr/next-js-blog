import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const Post = ({ show: { name, summary, image } }) => (
  <Layout>
    <h1>{name}</h1>
    <p dangerouslySetInnerHTML={{ __html: summary }} />
    {image && <img src={image.medium} />}
  </Layout>
);

Post.getInitialProps = async function({ query: {id} }) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
