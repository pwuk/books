import React from "react";
import {nearestPageBoundary, generatePageSizeSelectionData} from "./helpers";

const PAGE_SIZES = generatePageSizeSelectionData();

const PageSizeSelector = ({currentSelection, pageSizeSelectionHandler, totalRecords}) =>
    <div className={"page-component"}>
        Results per page {" "}
        {PAGE_SIZES.filter(pageSize=>pageSize<=nearestPageBoundary(totalRecords)).map((pageSize)=>
            <button key={pageSize}
                className={currentSelection === pageSize ? "selected" : ""}
                onClick={() => pageSizeSelectionHandler(pageSize)}>{pageSize.toString()}
            </button>)}
    </div>;

export {PageSizeSelector};