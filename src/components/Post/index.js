import PropTypes from 'prop-types';

export default function Post({ title, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{body}</div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
