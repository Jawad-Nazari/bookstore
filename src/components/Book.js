import React from 'react';
import PropTypes from 'prop-types';
import Card from './UI/Card';

const Book = (({
  id, title, author, category, onRemoveBookHandler,
}) => (
  <li>
    <Card id={id}>
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button" onClick={onRemoveBookHandler}>
          Remove
        </button>
      </div>
      <div>Progress 80%</div>
      <div>
        <button type="button">Update Progress</button>
      </div>
    </Card>
  </li>
));

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemoveBookHandler: PropTypes.func.isRequired,
};

export default Book;
