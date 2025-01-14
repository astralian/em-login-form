import { LoginForm } from '../../types/loginForm.schema.ts';
import mockFetch from '../client.ts';

const loginUser = async (data: LoginForm): Promise<any> => {
  try {
    return await mockFetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch {
    throw new Error('Failed to log in');
  }
};

export default loginUser;
