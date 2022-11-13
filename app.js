const express = require('express')
const app = express();
const { faker } = require('@faker-js/faker/locale/ru');

const host = '127.0.0.1'
const port = 3000

function generate() {
  let user = []
  for (let i=0; i < 100; i++) {
    let Name = faker.name.Name();
    let SurName = faker.name.SurName();
    let index = faker.address.index();
    let car = faker.vehicle.vehicle();
    let telephone = faker.phone.number('+7-777-777-77-77');

    user.push({
        "userid": i,
        "name": Name,
        "sur_name": SurName,
        "adress": index,
        "car": car,
        "telephone": telephone
    });
  }

  return { "users": user }
}

app.get('/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send(JSON.stringify(generate(), null, '\t'))
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
