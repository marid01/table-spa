import React from 'react';

function Table({data}) {
    return (
        <table className="table">
            <thead className="table__head">
            <tr className="table__row">
                <th>Дата</th>
                <th>
                    Имя
                </th>
                <th>
                    Количество
                </th>
                <th>
                    Расстояние
                </th>
            </tr>
            </thead>

            <tbody>
            {data.map((user, index) => (
                <tr key={index}>
                    <td>{user.date}</td>
                    <td >{user.name}</td>
                    <td>{user.amount}</td>
                    <td>{user.distance}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
