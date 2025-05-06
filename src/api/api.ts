// src/api/api.ts
import axios from 'axios';

// ✅ Créer une instance Axios commune
const api = axios.create({
  baseURL: 'http://localhost:8081/api', // adapte si ton backend change
});

// ✅ Exporter en default
export default api;
