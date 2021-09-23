import { Table, Pagination } from 'react-bootstrap';
import Moment from 'react-moment';
import '../../styles/adminpaginate.css';

const PaginationComponent = ({
  threads,
  prev,
  next,
  handleShow,
  // editthreadsAction,
}) => {
  const goToPrevPage = (page) => {
    prev(page);
  };

  const goToNextPage = (page) => {
    next(page);
  };

  return (
    <>
      {threads && threads.docs ? (
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
              {threads.docs.map((item) => (
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
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {threads.hasPrevPage ? (
              <>
                <Pagination.Item onClick={() => goToPrevPage(threads.prevPage)}>
                  {'<'}
                </Pagination.Item>
                <Pagination.Item>{threads.prevPage}</Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{threads.page}</Pagination.Item>
            {threads.hasNextPage ? (
              <>
                <Pagination.Item>{threads.nextPage}</Pagination.Item>
                <Pagination.Item onClick={() => goToNextPage(threads.nextPage)}>
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
