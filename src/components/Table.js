import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ list, title }) => {
   
    return (
        <div className="app-content-details-info-trade-table">
            <h3 className="app-content-details-info-trade-table__header">{title}</h3>
            <div data-simplebar className="app-content-details-info-trade-table-wrap">
                <table className="app-content-details-info-trade-table-body">
                    <thead className="app-content-details-info-trade-table-body__head">
                        <tr>
                            <th className="app-content-details-info-trade-table-body__row_head">Price</th>
                            <th className="app-content-details-info-trade-table-body__row_head">Quantity</th>
                            <th className="app-content-details-info-trade-table-body__row_head">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="app-content-details-info-trade-table-body__body">
                        {
                            list.reduce((result, current, i) => {

                                const tr = (
                                    <tr key={i}>
                                        {
                                            current.map((item, j) => {
                                                return (
                                                    <td
                                                        className="app-content-details-info-trade-table-body__row"
                                                        key={`${i}.${j}`}
                                                    >
                                                        {item}
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );

                                result.push(tr);

                                return result;
                            }, [])
                        }
                        </tbody>
                    
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.string.isRequired)
    )
};

export default Table;
Table.displayName = 'Table';