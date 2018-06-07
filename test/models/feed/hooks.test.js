import * as sendEmail from 'app/services/email'
import settings from 'config/settings'

describe("beforeSave", () => {

  describe("sendEmail", () => {

    describe("call sendEmail", () => {
      const jestFn = jest.fn()

      beforeEach(async () => {
        sendEmail.default = jestFn
      })

      it("should sendEmail", async () => {
        let feed = await factory.create('feed', { sendEmail: false })

        const res = jestFn.mock.calls[0][0]

        expect(res).toEqual({
          link: feed.link,
          name: feed.name,
          email: settings.email_to,
        })

      })
    })

    describe("don't call sendEmail", () => {
      const jestFn = jest.fn()

      beforeEach(async () => {
        sendEmail.default = jestFn
      })

      it("should sendEmail", async () => {
        let feed = await factory.create('feed', { sendEmail: true })

        const res = jestFn.mock.calls

        expect(res).toEqual([])
      })
    })

  })

})
