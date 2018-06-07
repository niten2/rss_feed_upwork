import { Feed } from "app/models"
import { setStartFeeds } from 'app/services/rss'

describe('setStartFeeds', () => {

  it("should create feed", async () => {
    const rss = [
      {
        title: "title",
        link: "link",
      },
    ]

    await setStartFeeds(rss)

    const feed = await Feed.findOne()

    expect(feed).toEqual(
      expect.objectContaining({
        name: "title",
        link: "link",
      })
    )
  })

})
