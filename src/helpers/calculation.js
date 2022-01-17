
const testData = [[0,1],[0,1],[0,1]]

const allFormsComplete = (formsArr) => {
    const valueArr = formsArr.map((form)=> form.length)
    console.log("Form Lengths: " + valueArr)
    return !valueArr.includes(0) 
}

const everyoneAvailable = (formsArr, dayIndex) => {
    const available = formsArr.map((form) => form[dayIndex])
    console.log(`Preferences for day ${dayIndex}: ` + available)
    return !available.includes(0) 
}

const availableDays = (formsArr) => {

}



// console.log(allFormsComplete(testData));
console.log(everyoneAvailable(testData, 0));
console.log(everyoneAvailable(testData, 1));

