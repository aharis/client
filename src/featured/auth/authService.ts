import axios from 'axios';
import { API_URL } from '../../utils/constants';

//Register user
const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/user`, userData);
   return response.data;
};

const login = async (userData: any) => {
  const  response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.result.token));
  }
return response.data;

}

const logout = async() => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout,
};

export default authService;
