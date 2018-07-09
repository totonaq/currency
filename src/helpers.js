export const doesLocalStorageExist = storage => {

    if (storage !== 'undefined') {

        const parsedStorage = JSON.parse(storage);

        if (typeof parsedStorage === 'object' &&
            parsedStorage !== null &&
            Object.keys(parsedStorage).length) {

            return true;

        }

    }

    return false;

};


export const getPriceChange = (a, b) => {
    const trl = Math.pow(10, 12);
    return (a * trl - b * trl) / trl;
};


export const toFiveDecimals = num => {
    return Math.round(num * 100000) / 100000;
};


export const getChangeClass = change => {
    if (change < 0) {
        return ' down';
    } else if (change > 0) {
        return ' up';
    } else {
        return '';
    }
};


export const replaceUnderscore = str => {
    const newStr = str.replace('_', '-');
    return newStr;
};


export const handleResponse = response => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
};


export const tickerErrorMsg = 
	'При загрузке данных возникла ошибка. ' +
	'Пожалуйста, проверьте ваш доступ к сайту exmo.com.';
export const bookOrderErrorMsg =
    'При загрузке данных возникла ошибка.';