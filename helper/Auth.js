import axios from 'axios';

const API_KEY = 'AIzaSyDy-7cATxiFfP9Bajah93tZUGe2SUx0WmI';

export async function createUser({ name, email, password }) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    )
    await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        idToken: response.data.idToken,
        displayName: name,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    throw error; 
  }
}

export async function logiUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    
    return response.data; 
  } catch (error) {
    console.error('Error logging in user:', error);
  }
}
