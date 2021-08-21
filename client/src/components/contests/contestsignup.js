const ContestSignup = () => {
  return (
    <div className='contestformbg'>
      <div className='contestsignupform'>
        <h3 style={{ color: 'white' }}>Contest Sign Up</h3>
        <div className='contestformbreak' />

        <form action='/'>
          <label for='firstname'>Firstname: </label>{' '}
          <input
            type='text'
            placeholder='Firstname'
            id='firstname'
            name='firstname'
          />
          <div className='contestformbreak' />
          <label for='lastname'>Lastname: </label>{' '}
          <input
            type='text'
            placeholder='Lastname'
            id='lastname'
            name='lastname'
          />
          <div className='contestformbreak' />
          <label for='email'>Email: </label>{' '}
          <input type='email' placeholder='Email' id='email' name='email' />
          <div className='contestformbreak' />
          <button className='contestformbtn'>Sign Up</button>
          <div className='contestformbreak' />
        </form>
      </div>
    </div>
  );
};

export default ContestSignup;
