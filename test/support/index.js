import sinon from 'sinon'
import factory from "test/factory"
import matchers from "test/support/matchers"
import { dropDb } from 'db/sequelize'

global.factory = factory
global.matchers = matchers

jest.setTimeout(10000)

afterEach(async () => { await dropDb() })
