import * as mailgun from "config/mailgun"
import * as settings from "config/settings"
import { sendEmailMailgun } from 'app/services/email'

describe('sendEmailMailgun', () => {
  let feed
  const email = "test@test.com"
  const link = "link"
  const name = "name"
  const jestFn = jest.fn()
  const mockMailgun = {
    messages: () => {
      return {
        send: jestFn
      }
    }
  }

  beforeEach(async () => {
    mailgun.default = mockMailgun
    settings.default = {
      isEnvProd: true,
      email_to: email,
    }

    feed = await factory.create("feed")

    await sendEmailMailgun([feed])
  })

  it("should call send messages", async () => {
    let res = mockMailgun.messages().send.mock.calls[0][0]

    expect(res).toEqual({
      from: expect.any(String),
      to: email,
      subject: expect.any(String),
      html: expect.any(String),
    })
  })

})
