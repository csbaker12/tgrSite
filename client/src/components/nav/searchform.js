import '../../styles/search.css';

const SearchForm = () => {
  return (
    <>
      <div className='searchform'>
        <form method='GET'>
          <input
            type='text'
            name='search'
            placeholder='Search TetonGravity.com'
            style={{ width: '50%', textAlign: 'center' }}
          />
          <button className='search_btn'>Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
