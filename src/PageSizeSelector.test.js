import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PageSizeSelector } from "./PageSizeSelector";
import React from "react";

describe("page size selector functionality", () => {
  test("component renders correctly", () => {
    const { container } = render(
      <PageSizeSelector
        currentSelection={1}
        pageSizeSelectionHandler={() => {}}
        totalRecords={100}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="page-component"
        >
          Results per page 
           
          <button
            class=""
          >
            10
          </button>
          <button
            class=""
          >
            20
          </button>
          <button
            class=""
          >
            30
          </button>
          <button
            class=""
          >
            40
          </button>
          <button
            class=""
          >
            50
          </button>
        </div>
      </div>
    `);
  });

  test("handle on change click", () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(
      <PageSizeSelector
        currentSelection={1}
        pageSizeSelectionHandler={mockClickHandler}
        totalRecords={200}
      />
    );
    const element = getByText(/50/gi);
    fireEvent.click(element);
    expect(mockClickHandler).toHaveBeenCalledWith(50);
  });
});
