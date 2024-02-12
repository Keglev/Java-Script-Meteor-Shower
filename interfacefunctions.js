import { invertMonthYear, returnHemisphere, returnIntensity } from "./logicfunctions.js";

/**
 * @description Print a table with the list of meteor shower
 * @param {Array} list
 */
const printShowerList = (list) => {
    console.log('\nShower Name               - INTENSITY - HEMISPHERE - PERIOD');

    list.forEach( printShower );
}

/**
 * @description Print a table line with a list of showers
 * @param {Object} shower
 */
const printShower = (shower) => {
    const name = shower.name.padEnd(27,' ');
    let intensity = returnIntensity(shower.intensity);
    let hemisphere = returnHemisphere(shower.declination);

    intensity = intensity.padEnd(11, ' ');
    hemisphere = hemisphere.padEnd(10,' ');

    const beginDate = invertMonthYear(shower.begin);
    const endDate = invertMonthYear(shower.end);

    console.log(`${name} - ${intensity} - ${hemisphere} - ${beginDate} à ${endDate} `);
}

export default printShowerList;