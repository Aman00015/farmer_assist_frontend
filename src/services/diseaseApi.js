// services/diseaseApi.js
const BASE_URL = `https://farmer-assist-backend.onrender.com/api`

export const diseaseApi = {
  async getStatus() {
    const response = await fetch(`${BASE_URL}/status`);
    return response.json();
  },

  async loadModel() {
    const response = await fetch(`${BASE_URL}/load-model`, {
      method: 'POST'
    });
    return response.json();
  },

  async predictDisease(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },

  async getSupportedCrops() {
    const response = await fetch(`${BASE_URL}/supported-crops`);
    return response.json();
  }
};