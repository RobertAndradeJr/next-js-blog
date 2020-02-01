import withLayout from '../components/withLayout';
import PostLink from '../components/PostLink'

const index = () => (
  <>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-nextjs" />
    </ul>
  </>
);

export default withLayout(index);
