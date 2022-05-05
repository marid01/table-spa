import React, {useEffect, useState} from 'react'
import './scss/app.scss';

import {data} from './db.js';
import Table from "./app/Table";
import Pagination from "./app/Pagination";

function App() {
    const [sortData, setSortData] = useState(data)
    const [ renderData, setRenderData ] = useState(sortData);
    const [ pagesConfig, setPagesConfig ] = useState({
        currentPage: 1,
        pageCount: Math.ceil(sortData.length / 5)
    });

    function onChoosePageHandler(page) {
        setPagesConfig({ ...pagesConfig, currentPage: page });
    }

    useEffect(
        () => {
            setPagesConfig({ ...pagesConfig, pageCount: Math.ceil(sortData.length / 5) });
        },
        [ sortData ]
    );

    useEffect(
        () => {
            setRenderData(
                sortData.slice(
                    pagesConfig.currentPage === 1
                        ? pagesConfig.currentPage - 1
                        : (pagesConfig.currentPage - 1) * 5,
                    pagesConfig.currentPage * 5
                )
            );
        },
        [ pagesConfig, sortData ]
    );

    return (
        <div className="wrapper">
            <Table data={renderData}/>
            <Pagination
                currentPage={pagesConfig.currentPage}
                pageCount={pagesConfig.pageCount}
                onChoosePage={onChoosePageHandler}
            />
        </div>
    );
}

export default App
