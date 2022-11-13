import { faker } from '@faker-js/faker/locale/ru';

import express from 'express';
const app = express();

const host = '127.0.0.1'
const port = 3000

function generate() {
  let users = []
  for (let i=0; i < 100; i++) {
    let Name = faker.name.Name();
    let SurName = faker.name.SurName();
    let index = faker.address.index();
    let car = faker.vehicle.vehicle();
    let telephone = faker.phone.number('+7-###-###-##-##');

    users.push({
        "userid": i,
        "name": Name,
        "sur_name": SurName,
        "adress": index,
        "car": car,
        "telephone": telephone
    });
  }

  return { "data": users }
}

app.get('/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send(JSON.stringify(generate(), null, '\t'))
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
