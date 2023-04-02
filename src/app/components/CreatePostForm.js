import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    onSubmit(formData);
    setTitle('');
    setContent('');
    setImage(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <ReactQuill value={content} onChange={setContent} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
