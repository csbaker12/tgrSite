import '../../styles/join.css';

const SignInCard = () => {
  return (
    <>
      <h1 className='signinheader'>SIGN IN:</h1>
      <form className='signinform'>
        <input
          type='text'
          placeholder='Enter your email'
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'black',
            fontSize: '40%',
            display: 'block',
            marginBottom: '3%',
            marginTop: '5%',
          }}
        />
        <input
          type='password'
          placeholder='Enter your password'
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'black',
            fontSize: '40%',
            display: 'block',
          }}
        />

        <button className='signinformsubmit'>JOIN</button>
      </form>
    </>
  );
};

export default SignInCard;
