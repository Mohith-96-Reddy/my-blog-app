import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { getPaginatedPosts } from '../utils/data';
import { usePagination } from '../utils/pagination';
import { useSearch } from '../utils/search';
import Post from '../components/Post';
import Pagination from '../components/Pagination';

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { paginatedData, page, maxPage, goToNextPage, goToPrevPage } = usePagination(posts);
  const searchedData = useSearch(paginatedData, searchTerm);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>My Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Blog</h1>

        <div>
          <input type="text" placeholder="Search by title or content" value={searchTerm} onChange={handleSearch} />
        </div>

        {searchedData.map(post => (
          <Post key={post.id} post={post} />
        ))}

        <Pagination page={page} maxPage={maxPage} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
      </main>

      <footer>
        <Link href="/create-post">
          <a>Create Post</a>
        </Link>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await getPaginatedPosts(1);
  return {
    props: {
      posts,
    },
  };
}
