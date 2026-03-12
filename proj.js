// BASE FARE STUFF
var basefare = 50;   // FIRST 2 KM COST
var perKMrate = 15;  // EXTRA KM COST
var baseKM = 2;      // KM INCLUDED IN BASE FARE

// FUNCTION TO CALCULATE FARE
function calculateFare() {
    // GET PICKUP AND DROPOFF VALUES (NUMBERS)
    var pickup = parseInt(document.getElementById("pickup").value);
    var dropoff = parseInt(document.getElementById("dropoff").value);

    // GET PASSENGER TYPE
    var type = document.getElementById("discount").value;

    // DISTANCE BETWEEN STATIONS
    var distance = Math.abs(dropoff - pickup);
    var fare; // JUST DECLARING IT HERE

    // CALCULATE FARE BASED ON DISTANCE
    if(distance <= baseKM) {
        fare = basefare; // WITHIN BASE KM, JUST BASE FARE
    } else {
        fare = basefare + ((distance - baseKM) * perKMrate); // ADD EXTRA KM FARE
    }

    // APPLY DISCOUNT IF APPLICABLE
    if(type == "student" || type == "senior" || type == "pwd") {
        fare = fare * 0.8; // 20% OFF
    }

    // ROUND TO 2 DECIMALS
    fare = fare.toFixed(2);

    // SHOW FARE ON PAGE
    document.getElementById("fareOutput").innerHTML = "Fare: ₱ " + fare;
}
