function findMatching(drivers, name) {
    let array = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return array;
  }

  function fuzzyMatch(drivers, name) {
    const newDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
    return newDrivers;
  }

  function matchName() {
    
  }
  