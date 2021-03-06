import faker from "faker"
import { factory } from "factory-girl"
import { Feed } from "app/models"

factory.define('feed', Feed, {
  title: faker.name.findName,
  link: faker.internet.email,
})

export default factory
