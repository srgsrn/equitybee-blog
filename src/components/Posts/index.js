import { useQuery } from 'react-query';

import Post from 'components/Post';

// TODO: move to separate file
const url = 'https://jsonplaceholder.typicode.com/posts';
const fetchPosts = () => fetch(url).then((res) => res.json());

export default function Posts() {
  const { isLoading, error, data } = useQuery('posts', fetchPosts);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return data.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));
}
