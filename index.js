import meteorShowerCollection from "./data/data.js";
import printShowerList from "./interfacefunctions.js";
import {
    verifyVisibleShowerByDate,
    verifyVisibleShowerNext2Months
} from "./logicfunctions.js";

const currentDate = new Date();

const visibleShowersToday = meteorShowerCollection.filter(
    (shower)=> verifyVisibleShowerByDate(shower, currentDate)
);

const visibleShowerNext2Months = meteorShowerCollection.filter(
    (shower)=> verifyVisibleShowerNext2Months(shower, currentDate)
);

console.log('Meteor Shower');

if ( visibleShowersToday.length > 0 ) {
    let msg = "\nWe find ";
    msg += visibleShowersToday.length == 1
        ? '1 Meteor Shower can be visible today'
        : visibleShowersToday.length + ' visible meteor showers can visible today';

    console.log(msg);

    printShowerList(visibleShowersToday);
} else {
    console.log('\nNo visible meteor showers today');
}

console.log('\n\nSee the next meteor showers:');
printShowerList(visibleShowerNext2Months);