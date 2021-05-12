import React, {useRef, useState } from "react";
import {useHistory, useParams} from "react-router-dom";

import {useFetchBooks} from "./hooks";
import {PageSizeSelector} from "./PageSizeSelector";
import {PageSelectorDropDown} from "./PageSelectorDropDown";
import {BookTable} from "./BookTable";

const Books = () => {
    const { filter = "", page = 1, size = 10 } = useParams();
    const history = useHistory();
    const searchInput = useRef(filter);
    const [filterInput, setFilterInput] = useState(filter);
    const [bookMetaData, loading] = useFetchBooks(page, size, filter, { count: 0, books:[]});

    const searchKey = searchInput.current.value;
    const pageSelectionHandler = (page) => history.push(`/${page}/${size}/${filter}`);
    const pageSizeSelectionHandler = (size) => history.push(`/${1}/${size}/${filter}`);
    const setFilter = () => {
        const newFilter = searchInput.current.value;
        history.push(`/${1}/${size}/${newFilter}`);
    };
    const clearFilter= () => {
        setFilterInput('');
        history.push(`/${1}/${size}/`);
    };
    const updateInput = (event) => {
        setFilterInput(event.target.value);
    };

    return (
        <div className={'App-header'}>
            <div className={"page-component"}>
                <input ref={searchInput} value={filterInput} onChange={updateInput} placeholder={'Search: author name or title'}/>
                <button onClick={setFilter}>Apply</button>
                <button onClick={clearFilter} disabled={!searchInput.current.value}>Clear</button>
                {loading ?
                    <div>Loading...</div>
                    : <div>{ bookMetaData.count === 0 ? "No matching books" : `Found ${bookMetaData.count} book(s)`}</div>}
            </div>
            <div className={"page-component"}>
                <PageSelectorDropDown
                    primaryText={"Page Number "}
                    secondaryText={" of "}
                    itemClickHandler={(page)=>pageSelectionHandler(page)}
                    totalItemCount={bookMetaData.count}
                    pageSize={size}
                    currentPage={parseInt(page,10)}
                />
            </div>
            {bookMetaData.count > 0 &&
            <>
                <PageSizeSelector currentSelection={parseInt(size,10)} pageSizeSelectionHandler={pageSizeSelectionHandler} totalRecords={bookMetaData.count} />
                <BookTable bookMetaData={bookMetaData} searchKey={searchKey} />
            </>}
        </div>
    );
}
export {Books};