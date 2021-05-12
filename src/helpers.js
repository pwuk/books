import React from "react";

const showHighLight = (text, searchKey) => {
    if(!searchKey) {
        return text;
    }
    const regex = new RegExp(`(${searchKey})`, "gi");
    const parts = text.split(regex);
    const textHighlights = parts.map((part, i) =><span className={regex.test(part) ? "search-highlight": ""} key={i}>{part}</span>);
    return (<>{textHighlights}</>);
}

const pagerMenu = (totalItemCount, pageSize) =>
    Array.from(
        {
            length: totalItemCount / pageSize + Number(Boolean(totalItemCount % pageSize))
        },
        (_, index) => index
    )

const isNumberOdd = ( number) => (number & 1) === 1;

const nearestPageBoundary = (totalRecords) => Math.ceil(totalRecords/10)*10;

const generatePageSizeSelectionData= ()=>Array.from({length:5}, (_, pageSizeBoundary)=>(pageSizeBoundary+1) * 10);

export {
    generatePageSizeSelectionData,
    isNumberOdd,
    showHighLight,
    nearestPageBoundary,
    pagerMenu
}