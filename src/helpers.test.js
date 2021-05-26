import {
  isNumberOdd,
  isNumberEven,
  showHighLight,
  nearestPageBoundary,
  pagerMenu, generatePageSizeSelectionData,
} from "./helpers";

import { render, screen } from "@testing-library/react";
import React, { useRef, useState } from "react";

describe("helper function tests", () => {
  test("Universal test", () => {
    expect(1 === 2).toBe(false);
  });

  test("isNumberOdd: odd number check", () => {
    expect(isNumberOdd(101)).toBe(true);
    expect(isNumberOdd(102)).toBe(false);
  });

  test("isNumberOdd: even number check", () => {
    expect(isNumberEven(101)).toBe(false);
    expect(isNumberEven(102)).toBe(true);
  });

  test('nearestPageBoundary: calculate nearest page boundrary from total record count', ()=>{
    expect(nearestPageBoundary(28)).toBe(30);
  });

  test('pagerMenu: correct generation of array of page number from total records and page size', ()=>{
    expect(pagerMenu(28, 10)).toStrictEqual([0,1,2]);
    expect(pagerMenu(10, 10)).toStrictEqual([0]);
  });

  test('generatePageSizeSelectionData: correct generation array of page number sizes', ()=>{
    expect(generatePageSizeSelectionData()).toStrictEqual([10,20,30,40,50]);
  });

  describe("search text highlight", () => {
    test("showHighLight: shows correctly when no search specified", () => {
      expect(showHighLight("target text", "")).toBe("target text");
    });

    test("showHighLight: shows correct search term highlight", () => {
      const { container } = render(showHighLight("target text", "get"));
      expect(container.firstChild).toMatchInlineSnapshot(`
              <span
                class=""
              >
                tar
              </span>
          `);
      expect(container.children[1]).toMatchInlineSnapshot(`
        <span
          class="search-highlight"
        >
          get
        </span>
      `);
    });

    test("showHighLight: shows no highlight for non-match", () => {
      // expect(showHighLight("target text", "unspecified")).toEqual(<React.Fragment><span className="" key={0}>target text</span></React.Fragment>)

      const { container, getByText } = render(
        showHighLight("target text", "unspecified")
      );
      expect(container).toMatchInlineSnapshot(`
              <div>
                <span
                  class=""
                >
                  target text
                </span>
              </div>
          `);
    });
  });
});
