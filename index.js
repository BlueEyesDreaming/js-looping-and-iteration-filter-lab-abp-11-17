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
  let matchingNames = drivers.filter(function(driver){
    if (name === letters){
      return true
    } else {
      return false
    }
    return matchingNames
  })
}

function matchName(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name === driver) {
      return true
    } else {
      return false
    }
    return matchingDrivers
  })
}
 