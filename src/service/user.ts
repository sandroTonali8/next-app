export async function Login(body: API.LoginParameters) {
  return fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify(body)
  }).then(response => response.json());
}