import * as mailgun from "config/mailgun"
import { sendEmailMailgun } from 'app/services/email'

describe('valid params given', () => {
  let mock
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
  })

  it("should call send messages", async () => {
    await sendEmailMailgun({ email, link, name })

    let res = mockMailgun.messages().send.mock.calls[0][0]

    expect(res).toEqual({
      from: expect.any(String),
      to: email,
      subject: expect.any(String),
      html: expect.any(String),
    })
  })

})

