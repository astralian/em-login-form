const mockFetch = async (
  _url: string,
  options: { method: string; headers: { 'Content-Type': string }; body: string }
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestBody = JSON.parse(options.body);

      if (requestBody.email === 'test@example.com' && requestBody.password === 'password123') {
        resolve({
          ok: true,
          status: 200,
          json: async () => ({ token: 'mocked-jwt-token', user: 'Test User' })
        });
      }

      resolve({
        ok: false,
        status: 401,
        json: async () => ({ message: 'Invalid credentials' })
      });
    }, 2000);
  });
};

export default mockFetch;
