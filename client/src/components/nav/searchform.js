import '../../styles/search.css';

const SearchForm = () => {
  return (
    <>
      <div className='searchform'>
        <form>
          <input
            type='text'
            placeholder='Search TetonGravity.com'
            style={{ width: '500px', textAlign: 'center' }}
          />
          <button className='search_btn'>Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
