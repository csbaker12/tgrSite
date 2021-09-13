// import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function authguard(ComposedComponent) {
  const AuthenticationCheck = (props) => {
    // const [isAuth, setIsAuth] = useState(false);
    const user = useSelector((state) => state.users);
    const auth = user?.auth;

    // useEffect(() => {
    //   if (auth === 'false') {
    //     props.history.push('/');
    //     console.log(auth);
    //   } else {
    //     if (user.data.role === 'user') {
    //       props.history.push('/');
    //     } else {
    //       setIsAuth(true);
    //     }
    //   }
    // }, [props, user, auth]);

    if (!auth) {
      return <div className='main_loader'>You don't have access!</div>;
    } else {
      return <ComposedComponent {...props} />;
    }
  };
  return AuthenticationCheck;
}
