async function fetchAllBreeds() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    let responseObject = await response.json();
    console.log(responseObject);

    let content = dropdownContent(responseObject)
    document.getElementById("drop-down").innerHTML=content;
}

function dropdownContent(responseObject) {
   //code
   let allBreeds = Object.keys(responseObject.message);

   console.log(allBreeds); 
   console.log(allBreeds[0]);

   let dropDown = "<select>";

//   logic for dropdown options
//   for() {
//        dropdown += `option`;
//    }

   dropDown += "<select>";
   return dropDown;
}

async function fetchDoggo(element) {
    // await = native js function ==> wait to load fetch request
    element.value="Generating Doggo...";
    let response = await fetch("https://dog.ceo/api/breeds/image/random");

    // wait for reponse variable to load before accessing object
    let responseObject = await response.json();

    // returns JSON object as a string and logs to console
    console.log(JSON.stringify(responseObject));

    console.log(responseObject.message);
    console.log(responseObject.status);
    // doggoHTML();
    render(responseObject);
    let content = render(responseObject);
    document.getElementById("content").innerHTML += content;
    element.value="Fetch Doggo...";
}

// function doggoHTML () {
//     document.getElementById("doggoHTML").innerHTML = "Generating Doggo...";
// }


// render response object
// .message rendered bc it is url
function render(responseObject) {
    return `
<img src="${responseObject.message}" style="max-width:300px"/>
`
}