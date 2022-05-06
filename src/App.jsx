import React, {useEffect, useState} from 'react'
import './scss/app.scss';

import {data} from './db.js';
import SortForm from "./app/SortForm";
import Table from "./app/Table";
import Pagination from "./app/Pagination";

function App() {
    const [sortData, setSortData] = useState(data)
    const [ sortConfig, setSortConfig ] = useState({
        sortBox: 'name',
        filterColumn: undefined,
        filterCondition: undefined,
        filterInputValue: undefined
    });
    const [ renderData, setRenderData ] = useState(sortData);
    const [ pagesConfig, setPagesConfig ] = useState({
        currentPage: 1,
        pageCount: Math.ceil(sortData.length / 5)
    });

    function onFilterSubmit(config) {
        console.log('config',config)
        setSortConfig({
            ...sortConfig,
            filterColumn: config.column,
            filterCondition: config.condition,
            filterInputValue: config.inputField
        });
    }
console.log(sortConfig)
    function onResetHandle() {
        setSortData([ ...data ]);
        setPagesConfig({ ...pagesConfig, currentPage: 1 });
    }

    function onChoosePageHandler(page) {
        setPagesConfig({ ...pagesConfig, currentPage: page });
    }

    useEffect(
        () => {
            if (sortConfig.filterColumn && sortConfig.filterCondition && sortConfig.filterInputValue) {
                if (sortConfig.filterColumn === 'name') {
                    if (sortConfig.filterCondition === 'equal')
                        setSortData([
                            ...sortData.filter((e) => e.name === sortConfig.filterInputValue)
                        ]);
                    if (sortConfig.filterCondition === 'contain')
                        setSortData([
                            ...sortData.filter((e) => e.name.includes(sortConfig.filterInputValue))
                        ]);
                    if (sortConfig.filterCondition === 'greater')
                        setSortData([
                            ...sortData.filter((e) => e.name.length > sortConfig.filterInputValue)
                        ]);
                    if (sortConfig.filterCondition === 'less')
                        setSortData([
                            ...sortData.filter((e) => e.name.length < sortConfig.filterInputValue)
                        ]);
                }
                if (sortConfig.filterColumn === 'points') {
                    if (sortConfig.filterCondition === 'equal')
                        setSortData([
                            ...sortData.filter(
                                (e) => e.points === Number(sortConfig.filterInputValue)
                            )
                        ]);
                    if (sortConfig.filterCondition === 'contain')
                        setSortData([
                            ...sortData.filter((e) =>
                                e.points.toString().includes(sortConfig.filterInputValue)
                            )
                        ]);
                    if (sortConfig.filterCondition === 'greater')
                        setSortData([
                            ...sortData.filter((e) => e.points > Number(sortConfig.filterInputValue))
                        ]);
                    if (sortConfig.filterCondition === 'less')
                        setSortData([
                            ...sortData.filter((e) => e.points < Number(sortConfig.filterInputValue))
                        ]);
                }
                if (sortConfig.filterColumn === 'distance') {
                    if (sortConfig.filterCondition === 'equal')
                        setSortData([
                            ...sortData.filter(
                                (e) => e.distance === Number(sortConfig.filterInputValue)
                            )
                        ]);
                    if (sortConfig.filterCondition === 'contain')
                        setSortData([
                            ...sortData.filter((e) =>
                                e.distance.toString().includes(sortConfig.filterInputValue)
                            )
                        ]);
                    if (sortConfig.filterCondition === 'greater')
                        setSortData([
                            ...sortData.filter(
                                (e) => e.distance > Number(sortConfig.filterInputValue)
                            )
                        ]);
                    if (sortConfig.filterCondition === 'less')
                        setSortData([
                            ...sortData.filter(
                                (e) => e.distance < Number(sortConfig.filterInputValue)
                            )
                        ]);
                }
            }
        },
        [ sortConfig ]
    );

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
            <SortForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
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
