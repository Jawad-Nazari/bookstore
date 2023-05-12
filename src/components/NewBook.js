import React from 'react';
import Card from './UI/Card';

const NewBook = () => (
  <Card>
    <h3>Add New Book</h3>
    <form>
      <div>
        <input type="text" placeholder="Book Title" />
      </div>
      <div>
        <select>
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Economy">Economy</option>
          <option value="History">History</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <button type="button">Add Book</button>
      </div>
    </form>
  </Card>
);

export default NewBook;
