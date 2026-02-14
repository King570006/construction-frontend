export const api = async (url, method = "GET", body) => {
  const res = await fetch(`http://localhost:4000${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
};