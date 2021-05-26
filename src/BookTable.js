import { showHighLight, isNumberOdd } from "./helpers";

const BookTable = ({ bookMetaData, searchKey }) => (
  <table className={"page-component book-table"}>
    <tbody>
      <tr>
        <th>Title</th>
        <th>Author(s)</th>
        <th>Year</th>
        <th>City, Country</th>
      </tr>
      {bookMetaData.books.map((book, index) => (
        <tr
          key={book.id}
          className={`row_${isNumberOdd(index) ? "odd" : "even"}`}
        >
          <td>{showHighLight(book["book_title"], searchKey)}</td>
          <td>{showHighLight(book["book_author"].join(", "), searchKey)}</td>
          <td>
            {showHighLight(book["book_publication_year"].toString(), searchKey)}
          </td>
          <td>
            {showHighLight(book["book_publication_city"], searchKey)}, $
            {showHighLight(book["book_publication_country"], searchKey)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export { BookTable };
