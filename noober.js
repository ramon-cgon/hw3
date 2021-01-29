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

if (numRiders > 1 || ride[0].numberOfPassengers == 1) {levelOfService = 'Noober Pool'
} else if (ride[0].purpleRequested == true) {levelOfService = 'Noober Purple'
} else if (ride[0].numberOfPassengers > 3) {levelOfService = 'Noober XL'
} else {levelOfService = 'Noober X'}


// for(var i = 0; i<numRiders; i++) {
// var i, j
// var j = i+1
// var k = 'passenger'
// }


ride.forEach((ride,i) => {
  let nameJ = `${ride.passengerDetails.first} ${ride.passengerDetails.last}` 
  console.log(nameJ)
  let phoneJ= `${ride.passengerDetails.phoneNumber}`
  let numberJ= `${ride.numberOfPassengers}`
  let pickupLine1J = `${ride.pickupLocation.address}`
  let pickupLine2J = `${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}`
  console.log(pickupLine2J)
  let dropoffLine1J = `${ride.dropoffLocation.address}`
  let dropoffLine2J = `${ride.dropoffLocation.city}, ${ride.dropoffLocation.state},  ${ride.dropoffLocation.zip}`
  console.log(i)
  window[`passenger${i+1}Name`]=nameJ;
  window[`passenger${i+1}Phone`]=phoneJ;
  window[`passenger${i+1}NumberOfPassengers`]=numberJ;
  window[`passenger${i+1}PickupAddressLine1`]=pickupLine1J;
  window[`passenger${i+1}PickupAddressLine2`]=pickupLine2J;
  window[`passenger${i+1}DropoffAddressLine1`]=dropoffLine1J;
  window[`passenger${i+1}DropoffAddressLine2`]=dropoffLine2J;
  
// eval(k+j+ 'Name' + '= "' + nameJ + '";')
// eval(k+j+ 'Phone' + '= "' + phoneJ + '";')
// eval(k+j+ 'NumberOfPassengers' + '= "' + numberJ + '";')
// eval(k+j+ 'PickupAddressLine1' + '= "' + pickupLine1J + '";')
// eval(k+j+ 'PickupAddressLine2' + '= "' + pickupLine2J + '";')
// eval(k+j+ 'DropoffAddressLine1' + '= "' + dropoffLine1J + '";')
// eval(k+j+ 'DropoffAddressLine2' + '= "' + dropoffLine2J+ '";')
})
console.log(passenger1Name)
console.log(passenger1NumberOfPassengers)
//  👆 YOUR CODE ENDS HERE. DONT CHANGE ANY OTHER CODE 👆
}