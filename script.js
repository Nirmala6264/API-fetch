// fetch(" https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//         const table = document.createElement("table");
//         const x = res.map((data) => {
//             console.log(data);
//             return `<tr>
//             <td>${data.name}</td>
//             <td>${data.email}</td>
//             <td>${data.address.street}</td>
//             <td>${data.address.city}</td>
//             </tr>`
//         });
//         table.innerHTML = x.join("");
//         document.getElementById("root").append(table);
//     });
const ul = document.getElementById('users');
  const list = document.createDocumentFragment();
  

  fetch(" https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
      .then((data) => {
          console.log(data);
      

        data.map((val) => {
          let li = document.createElement('li');
          let name = document.createElement('h4');
          let email = document.createElement('p');
          let street = document.createElement('p');
          let city = document.createElement('p');
          for (let i = 0; i < 16; i++) {
            name.innerHTML = `Name:${val.name}`;
      
            email.innerHTML = `Email:${val.email}`;
            street.innerHTML = `Street:${val.address.street}`;
            city.innerHTML = `City:${val.address.city}`;
          }
        li.appendChild(name);
          li.appendChild(email);
          li.appendChild(street);
          li.appendChild(city);
        list.appendChild(li);
      });
          ul.appendChild(list);
    })
  
  