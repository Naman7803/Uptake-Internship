const display=document.querySelector('.display')

fetch(`https://jsonplaceholder.typicode.com/users`).then(response =>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('API Failed');
    }
}).then(data =>{
        display.innerHTML=data.map((d , index) =>(`
        <tr>
            <td>${index+1}</td>
            <td>${d?.name}</td>
            <td>${d?.email}</td>
            <td>${d?.address?.city}</td>
            <td>${d?.company?.name}</td>
        </tr>
    `
    )).join('');
    
    // console.log(data,"data")
}).catch(error =>{
    console.log(error)
});




// async function fetchdata() {
 
//     try {
//         // Step 1: Fetch data from the API endpoint
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
 
//         // Step 2: Check if the response is successful (status 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
 
//         // Step 3: Parse the JSON response
//         const users = await response.json();
//         console.log(users)
 
//         // Step 4: Update the UI with the data
//         displayData(users);
 
//     } catch (error) {
//         // Handle errors (network issues, invalid JSON, etc.)
//         console.log(error);
//     }
// }


// function displayData(users){
//     users.forEach(user => {
//         display.innerHTML=`
//             <tr>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
                
//             </tr>
//         `
//     });
// }