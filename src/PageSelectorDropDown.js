import {pagerMenu} from "./helpers";

const PageSelectorDropDown = ({itemClickHandler, totalItemCount, pageSize, currentPage, primaryText, secondaryText}) => {
    const pageMenu = pagerMenu(totalItemCount, pageSize);
    if(pageMenu.length <= 1) {
        return null;
    }

    return (
        <>
            <label htmlFor="PageSelectorDropDown-id">
                {primaryText}
            </label>
            <select
                id={"PageSelectorDropDown-id"}
                className={"page-selection"}
                onChange={e=>itemClickHandler(e.target.value)}
                defaultValue={currentPage}
            >
                {pageMenu.map(page=><option key={page}>{page+1}</option>)}
            </select>
            {secondaryText}<strong>{pageMenu.length}</strong>
        </>
    );

}

export {PageSelectorDropDown}