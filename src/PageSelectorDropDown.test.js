import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PageSelectorDropDown } from "./PageSelectorDropDown";
import React from "react";

describe("page selector functionality", () => {
  test("component renders correctly", () => {
    const { container } = render(
      <PageSelectorDropDown
        primaryText={"Page Number "}
        secondaryText={" of "}
        itemClickHandler={() => {}}
        totalItemCount={50}
        pageSize={10}
        currentPage={2}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          for="PageSelectorDropDown-id"
        >
          Page Number 
        </label>
        <select
          class="page-selection"
          id="PageSelectorDropDown-id"
        >
          <option>
            1
          </option>
          <option
            selected=""
          >
            2
          </option>
          <option>
            3
          </option>
          <option>
            4
          </option>
          <option>
            5
          </option>
        </select>
         of 
        <strong>
          5
        </strong>
      </div>
    `);
  });

  test("handle on change click", () => {
    const mockClickHandler = jest.fn();
    const { getByLabelText } = render(
      <PageSelectorDropDown
        primaryText={"Page Number "}
        secondaryText={" of "}
        itemClickHandler={mockClickHandler}
        totalItemCount={50}
        pageSize={10}
        currentPage={2}
      />
    );
    const element = getByLabelText(/Page Number/gi);
    userEvent.selectOptions(element, "4");
    expect(mockClickHandler).toHaveBeenCalledWith("4");
  });
});
