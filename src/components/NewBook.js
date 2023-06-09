import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './UI/Card';
import { postANewBook } from '../redux/books/books';
import styles from './NewBook.module.css';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [author, setAuthor] = useState('');
  const [isAuthorValid, setIsAuthorValid] = useState(true);
  const categoryRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const titleChangeHandler = (event) => {
    const bookTitle = event.target.value;
    setTitle(bookTitle);
    if (bookTitle.trim().length < 3 || bookTitle.trim().length > 55) {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
  };

  const authorChangeHandler = (event) => {
    const bookTitle = event.target.value;
    setAuthor(bookTitle);
    if (bookTitle.trim().length < 3 || bookTitle.trim().length > 25) {
      setIsAuthorValid(false);
    } else {
      setIsAuthorValid(true);
    }
  };

  const addBookHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(
        postANewBook({
          title: title.trim(),
          author: author.trim(),
          category: categoryRef.current.value.trim(),
        }),
      );

      setIsFormValid(false);
      setTitle('');
      setAuthor('');
    }
  };

  useEffect(() => {
    if (
      isTitleValid
      && isAuthorValid
      && title.trim().length !== 0
      && author.trim().length !== 0
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isTitleValid, isAuthorValid, title, author]);

  return (
    <Card extraclass={styles.formContainer}>
      <h3>Add New Book</h3>
      <form onSubmit={addBookHandler} className={styles.form}>
        <div
          className={`${styles.formControl} ${
            !isTitleValid ? styles.inputInvalid : ''
          }`}
        >
          <input
            id="title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={titleChangeHandler}
          />
          <p>{!isTitleValid && 'Book title should be 3 to 55 character'}</p>
        </div>
        <div
          className={`${styles.formControl} ${
            !isAuthorValid ? styles.inputInvalid : ''
          }`}
        >
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={authorChangeHandler}
          />
          <p>
            {!isAuthorValid && 'Author name should be 3 to 25 character'}
          </p>
        </div>
        <div className={styles.formCategory}>
          <select ref={categoryRef}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div className={styles.formAction}>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBook;
