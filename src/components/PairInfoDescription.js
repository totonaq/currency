import React from 'react';
import PropTypes from 'prop-types';

const PairInfoDescription = ({ tickerInfo }) => {

    const { vol, vol_curr, avg, high, low } = tickerInfo;
    return (
        <div className="app-content-details-info-stat">
            <p className="app-content-details-info-stat__title">Statistic from last 24 hours:</p>
            <div className="app-content-details-info-stat__table-wrap">
                <table className="app-content-details-info-stat__table">
                    <tbody>
                        <tr>
                            <td>Volume of deals:</td>
                            <td><span>{vol}</span></td>
                        </tr>
                        <tr>
                            <td>Total value of all deals:</td>
                            <td><span>{vol_curr}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="app-content-details-info-stat__table-wrap">
                <table className="app-content-details-info-stat__table">
                    <tbody>
                        <tr>
                            <td>Average deal price:</td>
                            <td><span>{avg}</span></td>
                        </tr>
                        <tr>
                            <td>Maximum deal price:</td>
                            <td><span>{high}</span></td>
                        </tr>
                        <tr>
                            <td>Minimum deal price:</td>
                            <td><span>{low}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

PairInfoDescription.propTypes = {
    tickerInfo: PropTypes.shape({
        vol: PropTypes.string.isRequired,
        vol_curr: PropTypes.string.isRequired,
        avg: PropTypes.string.isRequired,
        high: PropTypes.string.isRequired,
        low: PropTypes.string.isRequired
    })
};
    
export default PairInfoDescription;
PairInfoDescription.displayName = 'PairInfoDescription';