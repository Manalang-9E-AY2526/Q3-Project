var basefare = 50;

var perKMrate = 15;

var baseKM = 2;

function calculateFare(){
	var pickup = document.getElementById("pickup").value;
	var dropoff = document.getElementById("dropoff").value;
	var type = document.getElementById("discount").value;
	var distance = Math.abs(dropoff - pickup);
	var fare;
	if(distance <= baseKM){

		fare = basefare;
	}

	else{

		fare = basefare + ((distance - baseKM) * perKMrate);

	}

	if(type == "student" || type == "senior" || type == "pwd"){

		fare = fare * 0.8;

	}


	fare = fare.toFixed(2);

	document.getElementById("fareOutput").innerHTML =
	"Fare: ₱ " + fare;

}
