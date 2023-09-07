import React, { useState } from 'react';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
    console.log(`Login: ${login}, Senha: ${password}`);
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <LoginInput value={login} onChange={handleLoginChange} />
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;