import PropTypes from 'prop-types';

import img_01 from 'assets/images/sailing4-1.jpeg';

export default function Post({ title, body }) {
  return (
    <div className='flex flex-col mb-8 sm:flex-row '>
      <div className='basis-2/5 mr-5'>
        <img src={img_01} alt='' />
      </div>
      <div className='basis-3/5'>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
