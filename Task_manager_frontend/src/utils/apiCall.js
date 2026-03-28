const API_URL = "http://localhost:3000";

export const apiCall = async ({ url, method, body }) => {
  try {
    const apiUrl = `${API_URL}/${url}`;
    const response = await fetch(apiUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer saintellect`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};