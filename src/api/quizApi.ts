import axios from 'axios';
import { Quiz } from '../context/QuizContext';

// Change si ton backend est ailleurs
const API_URL = 'http://localhost:8081/api/quizzes';

export const createQuizApi = async (quizData: Omit<Quiz, 'id'>) => {
  const response = await axios.post(API_URL, quizData);
  return response.data;
};

export const getAllQuizzes = async (): Promise<Quiz[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getQuizById = async (quizId: string): Promise<Quiz> => {
  const response = await axios.get(`${API_URL}/${quizId}`);
  return response.data;
};


