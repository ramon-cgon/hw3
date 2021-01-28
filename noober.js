function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  
  // these variables map to the elements on the finished page;
  // assign the proper value to each variable


console.log(ride)
console.log(ride.length)


let numRiders = ride.length
let levelOfService 

let passenger1Name, passenger1Phone, passenger1NumberOfPassengers, passenger1PickupAddressLine1, passenger1PickupAddressLine2, passenger1DropoffAddressLine1, passenger1DropoffAddressLine2 
, passenger2Name, passenger2Phone, passenger2NumberOfPassengers, passenger2PickupAddressLine1, passenger2PickupAddressLine2, passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
, passenger3Name, passenger3Phone, passenger3NumberOfPassengers, passenger3PickupAddressLine1, passenger3PickupAddressLine2, passenger3DropoffAddressLine1, passenger3DropoffAddressLine2



console.log(numRiders)
if (numRiders > 1 || ride[0].numberOfPassengers == 1) {levelOfService = 'Noober Pool'
} else if (ride[0].purpleRequested == true) {levelOfService = 'Noober Purple'
} else if (ride[0].numberOfPassengers > 3) {levelOfService = 'Noober XL'
} else {levelOfService = 'Noober X'}

console.log(levelOfService)
 
for(var i = 0; i<numRiders; i++) {
var i, j
var j = i+1
var k = 'passenger'
let nameJ = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`; 
let phoneJ= `${ride[i].passengerDetails.phoneNumber}`
let numberJ= `${ride[i].passengerDetails.numberOfPassengers}`
let pickupLine1J = `${ride[i].pickupLocation.address}`
let pickupLine2J = `${ride[i].pickupLocation.city} + ', ' + ${ride[i].pickupLocation.state} + ', ' + ${ride[i].pickupLocation.zip}`
let dropoffLine1J = `${ride[i].dropoffLocation.address}`
let dropoffLine2J = `${ride[i].dropoffLocation.city} +', ' + ${ride[i].dropoffLocation.state} + ', ' + ${ride[i].dropoffLocation.zip}`
console.log (nameJ)
console.log (phoneJ)
eval(k+j+ 'Name' + '= "' + nameJ + '";')
eval(k+j+ 'Phone' + '= "' + phoneJ + '";')
eval(k+j+ 'NumberOfPassengers' + '= "' + numberJ + '";')
eval(k+j+ 'PickupAddressLine1' + '= "' + pickupLine1J + '";')
eval(k+j+ 'PickupAddressLine2' + '= "' + pickupLine2J + '";')
eval(k+j+ 'DropoffAddressLine1' + '= "' + dropoffLine1J + '";')
eval(k+j+ 'DropoffAddressLine2' + '= "' + dropoffLine2J+ '";')

}
console.log("lastry")




 //  👆 YOUR CODE ENDS HERE. DONT CHANGE ANY OTHER CODE 👆
}