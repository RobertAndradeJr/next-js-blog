import Link from "next/link";

const PostLink = ({ id, name }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{name}</a>
    </Link>
  </li>
);

export default PostLink;
