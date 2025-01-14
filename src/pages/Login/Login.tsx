import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Checkbox, Input, TextLink } from '../../components/core';
import { LoginForm, loginFormSchema } from '../../types/loginForm.schema';
import { loginUser } from '../../api/auth';
import { setToken } from '../../utils/authToken';

import styles from './Login.module.sass';

const Login = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = async (data: LoginForm) => {
    setSubmitError(null);

    try {
      const response = await loginUser(data);
      if (response.ok) {
        const { token } = await response.json();

        setToken(rememberMe, token);

        console.log('Here we implement redirect');
      } else {
        setSubmitError('Invalid credentials. Please try again.');
      }
    } catch {
      setSubmitError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={styles.header}>Nice to see you again</h3>

      {submitError && <div className={styles.subheader}>{submitError}</div>}

      <div className={styles.fields}>
        <Input
          label="Email"
          placeholder="Enter your email"
          disabled={isSubmitting}
          isError={!!errors.email}
          helpText={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          disabled={isSubmitting}
          type="password"
          isError={!!errors.password}
          helpText={errors.password?.message}
          {...register('password')}
        />

        <div className={styles.actions}>
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            disabled={isSubmitting}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <TextLink href="#">Forgot password?</TextLink>
        </div>
      </div>

      <div className={styles.controls}>
        <Button
          disabled={isSubmitting}
          loading={isSubmitting}
          variant="primary"
          size="large"
          type="submit"
        >
          Sign In
        </Button>
      </div>

      <div className={styles.links}>
        <span className={styles.label}>Don't have an account?</span>
        <TextLink href="#">Sign up now</TextLink>
      </div>
    </form>
  );
};

export default Login;
