import axios from 'axios';

const API_URL = 'http://localhost:3001/api/r1';

//Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/user`, userData);

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }

  return response.data;
};

const login = async (userData) => {
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
