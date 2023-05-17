import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './redux/ui/uiSlice';
import Modal from './components/UI/Modal';
import Spinner from './components/UI/LoadingIndicator';

import Layout from './components/UI/Layout';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

const App = () => {
  const {
    showModal, loading, isError, message,
  } = useSelector(
    (state) => state.ui,
  );
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    if (!loading && showModal) {
      dispatch(uiActions.closeModal());
    }
  };
  return (
    <Layout>
      {showModal && (
        <Modal onClick={closeModalHandler}>
          {loading && <Spinner />}
          {message !== '' && (
            <div className="modal_message">
              <h3>{isError ? 'Error' : 'Success'}</h3>
              <p className={isError ? 'action-error' : 'action-success'}>
                {message}
              </p>
              <button
                className="btn_close_modal"
                onClick={closeModalHandler}
                type="button"
              >
                OKAY
              </button>
            </div>
          )}
        </Modal>
      )}
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
