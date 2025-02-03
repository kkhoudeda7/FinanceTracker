import React from 'react';

const List = ({ entries }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{entry.category}</td>
                        <td>{entry.description}</td>
                        <td>${entry.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default List;