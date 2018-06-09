import { Feed } from "app/models"

describe('.setSendEmails', () => {
  let feed

  beforeEach(async () => {
    feed = await factory.create("feed", { sendEmail: false })

    await Feed.setSendEmails([feed])
  })

  it("should create feed", async () => {
    const feed = await Feed.findOne()

    expect(feed).toEqual(
      expect.objectContaining({
        sendEmail: true,
      })
    )
  })

})

describe('.createNewFeeds', () => {
  const rss = [
    {
      title: "title",
      link: "link",
    },
  ]

  it("should new feed", async () => {
    const res = await Feed.createNewFeeds(rss)

    expect(res).toContainEqual(
      expect.objectContaining({
        title: "title",
        link: "link",
      })
    )
  })

  it("should return empty", async () => {
    const feed = await factory.create("feed", { title: rss[0].title, link: rss[0].link })
    const res = await Feed.createNewFeeds(rss)

    expect(res).toEqual([])
  })

})
