import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (name: string, email: string, password: string) => {
  const res = await API.post('/auth/register', { name, email, password });
  return res.data; // Retourne l'objet User
};

export const loginUser = async (email: string, password: string) => {
  const res = await API.post('/auth/login', { email, password });
  return res.data; // Retourne l'objet User
};
