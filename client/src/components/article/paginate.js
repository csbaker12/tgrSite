import { Table, Pagination } from 'react-bootstrap';
import Moment from 'react-moment';
import '../../styles/adminpaginate.css';

const PaginationComponent = ({ arts, prev, next, handleShow }) => {
  const goToPrevPage = (page) => {
    prev(page);
  };

  const goToNextPage = (page) => {
    next(page);
  };

  return (
    <>
      {arts && arts.docs ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Created</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {arts.docs.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Moment to={item.date}></Moment>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td
                    onClick={() => handleShow(item._id)}
                    className='removebtn'>
                    Remove
                  </td>
                  <td onClick={() => alert(item._id)} className='removebtn'>
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {arts.hasPrevPage ? (
              <>
                <Pagination.Item onClick={() => goToPrevPage(arts.prevPage)}>
                  {'<'}
                </Pagination.Item>
                <Pagination.Item>{arts.prevPage}</Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{arts.page}</Pagination.Item>
            {arts.hasNextPage ? (
              <>
                <Pagination.Item>{arts.nextPage}</Pagination.Item>
                <Pagination.Item onClick={() => goToNextPage(arts.nextPage)}>
                  {'>'}
                </Pagination.Item>
              </>
            ) : null}
          </Pagination>
        </>
      ) : null}
    </>
  );
};

export default PaginationComponent;
