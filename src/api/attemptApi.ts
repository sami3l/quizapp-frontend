// src/api/attemptApi.ts
import api from './api'; // importe l'instance axios correctement
import { QuizAttempt } from '../context/QuizContext';

// ✅ Créer une tentative (Submit un quiz)
export const createAttemptApi = async (attempt: Omit<QuizAttempt, 'id' | 'completedAt'>) => {
  const response = await api.post<QuizAttempt>('/attempts/submit', attempt);
  return response.data;
};

// ✅ Récupérer les tentatives d'un utilisateur
export const getUserAttemptsApi = async (userId: string) => {
  const response = await api.get<QuizAttempt[]>(`/attempts/user/${userId}`);
  return response.data;
};

// ✅ Récupérer toutes les tentatives (Leaderboard global)
export const getAllAttemptsApi = async () => {
  const response = await api.get<QuizAttempt[]>('/attempts');
  return response.data;
};

// ✅ Récupérer une tentative précise (ResultsPage après avoir passé un quiz)
export const getAttemptByIdApi = async (attemptId: string) => {
  const response = await api.get<QuizAttempt>(`/attempts/${attemptId}`);
  return response.data;
};
