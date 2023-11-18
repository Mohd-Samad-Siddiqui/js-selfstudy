/*

------------------------------------------DATE & TIME in JS--------------------------------------

Definition:
----------
In JavaScript, the Date object represents a date and time. It allows you to work with dates and times, 
perform various operations, and format them as needed.

Declaration: 
-----------
You can create a new Date object using the new Date() constructor.
        let currentDate = new Date();

The typeof operator for a Date object is "object."
        console.log(typeof currentDate);    //Output: object

==================================================================================================

Date Object Methods:
-------------------

A)  toString():
    Definition: Returns a string representation of the date.
    Code:
    console.log(currentDate.toString());
    Output: Sun Nov 19 2023 01:22:34 GMT+0530 (India Standard Time)


B)  toJSON():
    Definition: Returns a string representation of the date in JSON format.
    Code:
    console.log(currentDate.toJSON());
    Output: 2023-11-18T19:52:34.100Z


C)  toISOString():
    Definition: Returns a string representation of the date in ISO format.
    Code:
    console.log(currentDate.toISOString());
    Output: 2023-11-18T19:52:34.100Z

D)  toDateString():
    Definition: Returns a human-readable date portion of the date.
    Code:
    console.log(currentDate.toDateString());
    Output: Sun Nov 19 2023

E)  toLocaleString():
    Definition: Returns a string representation of the date using the system's locale.
    Code:
    console.log(currentDate.toLocaleString());
    Output: 19/11/2023, 01:22:34 (Depends on your system locale)

    
F)  toLocaleDateString():
    Definition: Returns a string with a language-sensitive representation of the date portion.
    Code:
    console.log(currentDate.toLocaleDateString());
    Output: 19/11/2023 (Language-sensitive representation of the date portion)


G)  toLocaleTimeString():
    Definition: Returns a string with a language-sensitive representation of the time portion.
    Code:
    console.log(currentDate.toLocaleTimeString());
    Output: 01:22:34 (Language-sensitive representation of the time portion)


H)  toTimeString():
    Definition: Returns a human-readable time portion of the date.
    Code:
    console.log(currentDate.toTimeString());
    Output (example): "15:23:45 GMT+0000 (Coordinated Universal Time)"


==================================================================================================

        Comparing the time
       --------------------

    //Create two Date objects representing different dates
        let date1 = new Date('2022-11-30T12:00:00');     //Create the time by using String way
        let date2 = new Date(2023, 0, 01, 2, 30);        //Create the time by this way. But in this way months start from 0

    //Compare the dates
        if (date1 < date2) {
        console.log('date1 is earlier than date2');
        } else if (date1 > date2) {
        console.log('date1 is later than date2');
        } else {
        console.log('Both dates are equal');
        }

    //Output: date1 is earlier than date2



When you compare two Date objects in JavaScript using the standard comparison operators (<, >, <=, >=), 
you are actually comparing their underlying timestamps. The timestamp is a numeric value representing the number 
of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC, which is also known as the Unix Epoch.

When you create a Date object, it stores this timestamp internally. When you perform a comparison between two Date objects, 
JavaScript compares their timestamps directly.


Here's a simplified explanation of how the comparison works:

If date1 is created before date2, then date1.getTime() will be less than date2.getTime().
If date1 is created after date2, then date1.getTime() will be greater than date2.getTime().
If both Date objects represent the same moment, their timestamps will be equal (date1.getTime() === date2.getTime()).
The comparison operators use these numeric values to determine the order of the dates.

Let's take a quick example:

        let date1 = new Date('2022-11-30T12:00:00');
        let date2 = new Date('2022-11-30T18:30:00');

        console.log(date1.getTime());   // Output: 1640935200000
        console.log(date2.getTime());   // Output: 1640951400000

        console.log(date1 < date2);     // Output: true
In this example, date1 is earlier than date2 because date1.getTime() is less than date2.getTime().

--------------------------------------------------------------------------------------------------

Real World Use of comparing data and time:
-----------------------------------------
Let's consider a more practical example related to event scheduling. Imagine you have a list of events, 
and you want to find the upcoming event based on the current date and time.

        // Function to find the upcoming event
        function findUpcomingEvent(events) {
            // Get the current date and time
            let currentDate = new Date();

            // Filter events that haven't occurred yet
            let upcomingEvents = events.filter(event => event.time > currentDate);

            // Return the first upcoming event
            return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
        }

        // Example events
        let events = [
        { name: 'Meeting', time: new Date('2023-11-30T10:00:00') }
        ];

        // Find and output the upcoming event
        let upcomingEvent = findUpcomingEvent(events);
        console.log(upcomingEvent ? `The upcoming event is: ${upcomingEvent.name}` : 'No upcoming events.');

        //OUTPUT- The upcoming event is: Meeting

In this example, the findUpcomingEvent function takes an array of event(I've just  given single event i.e. Meeting), 
filters out events that have already occurred, and returns the upcoming event.

*/