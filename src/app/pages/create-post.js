import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { createPost } from '../utils/data';
import CreatePostForm from '../components/CreatePostForm';

export default function CreatePostPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(data) {
    try {
      await createPost(data);
      router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Create Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create Post</h1>

        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}

        <CreatePostForm onSubmit={handleSubmit} />

      </main>

      <footer>
        <p>My Blog App</p>
      </footer>
    </div>
  );
}
