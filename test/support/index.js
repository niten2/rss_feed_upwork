import factory from "test/factory"
import matchers from "test/support/matchers"
import { dropDb } from 'db/sequelize'
// import express from 'express'
// import execGraphql from "test/support/exec_grapql"
// import { initApp } from "config/app"
// import { mockVk, mockDelay, mockLogger } from "test/support/mock"
// import { mockVk, mockDelay } from "test/support/mock"

global.factory = factory
// global.app = express()
// global.execGraphql = execGraphql
global.matchers = matchers

jest.setTimeout(10000)

// beforeAll(() => {
//   mockVk()
//   mockDelay()
//   // mockLogger()
// })

// beforeAll(async () => { await initApp(app) })
afterEach(async () => { await dropDb() })
