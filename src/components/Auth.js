import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth';

import styles from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
