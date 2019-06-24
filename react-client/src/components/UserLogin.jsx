import React from 'react';

const UserLogin = (props) => {
  // TODO: login page where user enters username
  return (
    <form action="" method="get" className="form-login" onSubmit={props.handleLogin}>
      <h2>Please Login:</h2>
      <div className="form-login">
        <label htmlFor="username">Enter your username: </label>
        <input type="text" name="username" id="username" onChange={props.handleInputChange} required />
      </div>
    </form>
  )
};

export default UserLogin;