import React from 'react';

const LoginInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Login:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default LoginInput;