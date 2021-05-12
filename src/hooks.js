import {useEffect, useState} from "react";
const API_URL = "//nyx.vima.ekt.gr:3000/api/books";
const API_METHOD = "POST";
const API_HEADERS = {
    "Content-Type": "application/json"
};

const useFetchBooks = (page, size, filter, initialState) => {
    const [theData, setTheData] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL, {
            method: API_METHOD,
            headers: API_HEADERS,
            body: JSON.stringify({
                page: Number(page),
                itemsPerPage: Number(size),
                filters: filter ? [{ type: "all", values: [filter] }] : []
            })
        })
            .then((data) => data.json())
            .then(data=>{
                setTheData(data);
                setLoading(false);

            });
    }, [page, size, filter]);

    return [theData, loading];
}

export {useFetchBooks};