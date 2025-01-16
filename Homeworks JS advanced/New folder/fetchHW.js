let fetchBtn = document.getElementById(`fetchBtn`);
fetchBtn.addEventListener(`click`, function (){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        console.log(parsedResult);
        console.log(parsedResult.length);
        document.getElementsByTagName(`table`)[0].style.display = `block`;
        for (i = 0; i < parsedResult.length; i++){
          let newTr = document.createElement('tr');
          document.getElementsByTagName(`table`)[0].appendChild(newTr);
          let tdName = document.createElement('td');
          tdName.innerText = parsedResult[i].name
          document.getElementsByTagName(`table`)[0].appendChild(tdName);
          let tdEmail = document.createElement('td');
          tdEmail.innerText = parsedResult[i].email
          document.getElementsByTagName(`table`)[0].appendChild(tdEmail);
          let tdAddress = document.createElement('td');
          tdAddress.innerText = `Suite: ${parsedResult[i].address.suite}; Street: ${parsedResult[i].address.street}; Zipcode: ${parsedResult[i].address.zipcode}; City: ${parsedResult[i].address.city}; Geo-lat: ${parsedResult[i].address.geo.lat}; Geo-lng: ${parsedResult[i].address.geo.lng}`
          document.getElementsByTagName(`table`)[0].appendChild(tdAddress);
          let tdPhone = document.createElement('td');
          tdPhone.innerText = parsedResult[i].phone
          document.getElementsByTagName(`table`)[0].appendChild(tdPhone);
        }
    })
})