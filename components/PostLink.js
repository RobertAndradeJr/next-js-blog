import Link from "next/link";

const PostLink = ({ id }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default PostLink;
