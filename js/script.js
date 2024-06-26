//numero aleatorio para la edad. 
//capturar elementos para poner usuarios
//spread operator con nuevos datos propios + los que vienen de la API
//usar el destructuring
//poner los datos en la págin
//css

const usersList = document.getElementById("listaUsuarios")
const randomAge = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
  const arrUsers = users.map(user => {
    const newUser =  {
      ...user,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
      age: randomAge(18, 60),
      img: `../assets/img/${user.id}.jpeg`,
      company: user.company.name
    }
    return newUser
  });

  arrUsers.forEach(user => {
    const {name, username, age, img, company, address, email, phone} = user
    const template = `
    <li>
      <div class="imageanduser">
        <div class="userdata">
          <p><span>Name:</span> ${name}</p>
          <p><span>Edad:</span> ${age}</p>
          <p><span>username:</span> ${username}</p>
          <p><span>email:</span> ${email}</p>
          <p><span>phone:</span> ${phone}</p>
        </div>
        <img src=${img} alt=${name}/>
      </div>
      <div class="address">
        <p><span>company:</span> ${company}</p>
        <p><span>address:</span> ${address}</p>
      </div>
    </li>
  `    
  usersList.innerHTML += template
  });

  console.log(arrUsers)

})
