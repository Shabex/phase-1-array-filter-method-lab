function findMatching (drivers, string){
    return drivers.filter( (driver)=>driver.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch (drivers, newContent){
    return drivers.filter(
        (match)=> match.toLowerCase().indexOf(newContent.toLowerCase())===0);
}

function matchName(drivers, copyDriversName){
    return drivers.filter((record)=>record.name===copyDriversName);
}