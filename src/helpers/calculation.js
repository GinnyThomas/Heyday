// const setResult = () => {
//     const newArr = [];
//     let total = 0
//     state.roomFormsRatings.map((ratingsArr) => {
//       if (ratingsArr.length > 0) {
//         for (let i = 0; i < ratingsArr.length; i++) {
//           total += ratingsArr[i];
//         }
//         newArr.push(1);
//       }
//     });

//     if ((total === 0) && (newArr.length == state.friendCount)) {
//       return <h2>No one is available on any date! <br></br> Perhaps try different dates?</h2>;
//     } else if (newArr.length == state.friendCount) {
//       return calculateRating();
//     } else {
//       return <h2>Waiting for results...</h2>;
//     }
//   };

const testData = [[0],[0],[0]]

const allFormsComplete = (formsArr) => {
    const valueArr = formsArr.map((form)=> form.length)
    console.log("Form Lengths: " + valueArr)
    return !valueArr.includes(0) 
}

console.log(allFormsComplete(testData));