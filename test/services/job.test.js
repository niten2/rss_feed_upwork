import { Feed } from "app/models"
import { runJob } from 'app/services/job'
import * as email from "app/services/email"
import * as rss from "app/services/rss"

describe('runJob', () => {

  describe('with feed', () => {
    const mockMailgun = jest.fn()
    const mockRss = () => [
      {
        title: "title1",
        link: "link1",
      },
    ]

    beforeEach(async () => {
      email.sendEmailMailgun = mockMailgun
      rss.getRss = mockRss

      await runJob()
    })

    it("should call send messages", async () => {
      const feed = await Feed.findOne()

      expect(feed).toEqual(
        expect.objectContaining({
          title: "title1",
          link: "link1",
        })
      )
    })
  })

  describe('without feed', () => {
    const mockMailgun = jest.fn()
    const mockRss = () => [
      {
        title: "title1",
        link: "link1",
      },
    ]

    beforeEach(async () => {
      email.sendEmailMailgun = mockMailgun
      rss.getRss = mockRss
      const feed = await factory.create("feed", { title: "title1", link: "link1" })

      await runJob()
    })

    it("should call send messages", async () => {
      expect(mockMailgun.mock.calls).toEqual([])
    })
  })

})
