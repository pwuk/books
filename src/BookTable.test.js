import { render, screen } from "@testing-library/react";

import { BookTable } from "./BookTable";

describe("BookTable component", () => {
  test("renders correctly with one book record", () => {
    const metaData = {
      books: [
        {
          id: 2086,
          book_author: ["smith and jones"],
          book_title: "A day in the the life of my dog",
          book_publication_year: 2021,
          book_publication_country: "UK",
          book_publication_city: "London",
          book_pages: 99,
        },
      ],
      count: 2425,
    };
    const { container } = render(
      <BookTable bookMetaData={metaData} searchKey={"jones"} />
    );

    const searchResults = container.querySelectorAll(".search-highlight");

    expect(searchResults).toMatchInlineSnapshot(`
      NodeList [
        <span
          class="search-highlight"
        >
          jones
        </span>,
      ]
    `);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <table
          class="page-component book-table"
        >
          <tbody>
            <tr>
              <th>
                Title
              </th>
              <th>
                Author(s)
              </th>
              <th>
                Year
              </th>
              <th>
                City, Country
              </th>
            </tr>
            <tr
              class="row_even"
            >
              <td>
                <span
                  class=""
                >
                  A day in the the life of my dog
                </span>
              </td>
              <td>
                <span
                  class=""
                >
                  smith and 
                </span>
                <span
                  class="search-highlight"
                >
                  jones
                </span>
                <span
                  class=""
                />
              </td>
              <td>
                <span
                  class=""
                >
                  2021
                </span>
              </td>
              <td>
                <span
                  class=""
                >
                  London
                </span>
                , $
                <span
                  class=""
                >
                  UK
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `);
  });
});
