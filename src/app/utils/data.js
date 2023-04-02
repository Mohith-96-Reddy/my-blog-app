const posts = [
    {
      id: 1,
      title: 'My First Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      authorId: 1,
      comments: [],
    },
    {
      id: 2,
      title: 'My Second Post',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      authorId: 2,
      comments: [],
    },
    {
      id: 3,
      title: 'My Third Post',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      authorId: 1,
      comments: [],
    },
    {
      id: 4,
      title: 'My Fourth Post',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      authorId: 3,
      comments: [],
    },
  ];
  
  export function getAllPosts() {
    // implement your logic to get all posts
    return posts;
  }
  
  export function getPostById(id) {
    // implement your logic to get a post by its id
    return posts.find(post => post.id === id);
  }
  
  export function createPost(post) {
    // implement your logic to create a new post
    post.id = Math.max(...posts.map(p => p.id)) + 1;
    post.comments = [];
    posts.push(post);
  }
  
  export function editPost(id, updatedPost) {
    // implement your logic to edit an existing post
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedPost };
    }
  }
  
  export function deletePost(id) {
    // implement your logic to delete a post
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      posts.splice(index, 1);
    }
  }
  
  export function createComment(postId, comment) {
    // implement your logic to create a new comment for a post
    const post = posts.find(post => post.id === postId);
    if (post) {
      comment.id = Math.max(...post.comments.map(c => c.id)) + 1;
      post.comments.push(comment);
    }
  }
  