/**
 * @description verify if the meteor shower which comes from the parameter is visible based in the date. Returns true or False
 * 
 *
 * @param {Object} shower
 * @param {Date} currentlDate
 * @returns {boolean}
 */
export const verifyVisibleShowerByDate = (shower, currentDate) => {
    const currentYear = currentDate.getFullYear();

    const beginDate = new Date(shower.begin + '/' + currentYear);
    const endDate = new Date(shower.end + '/' + currentYear);

    if ( beginDate.getMonth() + 1 > endDate.getMonth() + 1 ) {
        const yearEnd = endDate.getFullYear();
        endDate.setFullYear(yearEnd +1);
    }

    return ( currentDate >= beginDate && currentDate <= endDate );
}

/**
 * @description This function verify if the meteor shower in the parameter will be visible in the next 2 months based in the date 
 *
 * @param {object} shower
 * @param {Date} date
 * @returns {boolean}
 */
export const verifyVisibleShowerNext2Months = (shower, date) => {
    const currentDate = date;
    const currentYear = currentDate.getFullYear();
    const beginDate = new Date(shower.begin + '/' + currentYear);
    const endDate = new Date(currentDate);

    if ( currentDate.getMonth() + 1 > beginDate.getMonth() + 1 ) {
        const yearEnd = beginDate.getFullYear();
        beginDate.setFullYear(yearEnd +1);
    }

    endDate.setMonth( endDate.getMonth() + 2 );

    return ( currentDate < beginDate && beginDate < endDate );
}

/**
 * @description Invert the month and the day qhen there is no defined year
 *
 * @param {String} date
 */
export const invertMonthYear = (date) => {
    const invertedDate = date.split('/');

    return invertedDate[1] + '/' + invertedDate[0];
}

/**
 * @description Return the text with the intensity of the meteor shower
 *
 * @param {String} intensity
 */
export const returnIntensity = (intensity) => {
    let newIntensity = '1 (Weak)';

    if ( intensity.indexOf('Strong') >= 0 ) {
        newIntensity = '3 (Strong)';
    } else if ( intensity.indexOf('Average') >= 0 ) {
        newIntensity = '2 (Average)';
    } else if (  intensity.indexOf('Irregular') >= 0 ) {
        newIntensity = '(Irregular)';
    }

    return newIntensity;
}

/**
 * @description Return the hemisphere based in the declination value
 *
 * @param {Number} declination
 */
export const returnHemisphere = (declination) => declination >= 0 ? 'North' : 'South';