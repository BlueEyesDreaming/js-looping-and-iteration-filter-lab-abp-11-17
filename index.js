function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, letters) {
  let lengthOfLetters = letters.length;
  return drivers.filter(function(name) {
    return name.slice(0, lengthOfLetters) === letters
  })

  // filter(function(driver){
  //   if (name === letters){
  //     return true
  //   } else {
  //     return false
  //   }
  //   return matchingNames
  // })
}




// function matchName(drivers, name) {
//   let matchingDrivers = drivers.filter(function(driver){
//     if (name === driver) {
//       return true
//     } else {
//       return false
//     }
//     return matchingDrivers
//   })
// }
