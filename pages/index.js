import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import PostLink from "../components/PostLink";

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <PostLink {...show} key={show.id} />
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(({ show }) => show)
  };
};

export default Index;
