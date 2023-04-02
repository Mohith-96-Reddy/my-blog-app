export function searchPosts(posts, query) {
    // implement your logic to search for posts by title or content
    return posts.filter(post => post.title.includes(query) || post.content.includes(query));
  }
  