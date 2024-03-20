export async function LoginFun(userData) {

    const response = await fetch('http://3.125.116.109:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the token');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { token } = await response.json();
    // setToken(token);
    return token;
  }