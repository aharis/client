import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { IBook } from '../../utils/interfaces';

//Add new book
const addBook = async (bookData: IBook) => {
  const response = await axios.post(`${API_URL}/new-book`, bookData);
  return response.data;
};

const bookService = {
  addBook,
};

export default bookService;
