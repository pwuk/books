import { render, screen } from "@testing-library/react";
import App from "./App";

test("app renders in basic state", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <div
        class="App-header"
      >
        <div
          class="page-component"
        >
          <input
            placeholder="Search: author name or title"
            value=""
          />
          <button>
            Apply
          </button>
          <button
            disabled=""
          >
            Clear
          </button>
          <div>
            Loading...
          </div>
        </div>
        <div
          class="page-component"
        />
      </div>
    </div>
  `);
});
