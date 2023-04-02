import { useState } from 'react';

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, email, comment });
    setName('');
    setEmail('');
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Comment</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
