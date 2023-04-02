import Head from 'next/head';
import { getPostById } from '../utils/data';
import Post from '../components/Post';
import CommentForm from '../components/CommentForm';

export default function PostPage({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Post post={post} />
        <h2>Comments</h2>
        {post.comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>By {comment.author}</p>
          </div>
        ))}
        <CommentForm postId={post.id} />
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
}
