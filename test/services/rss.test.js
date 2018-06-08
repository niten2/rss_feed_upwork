import { Feed } from "app/models"
import { setStartFeeds, createNewFeeds } from 'app/services/rss'
import * as email from "app/services/email"

// describe('createNewFeeds', () => {
//   const rss = [
//     {
//       title: "title",
//       link: "link",
//     },
//   ]

//   it("should new feed", async () => {
//     let res = await createNewFeeds(rss)

//     expect(res).toContainEqual(
//       expect.objectContaining({
//         title: "title",
//         link: "link",
//       })
//     )
//   })

//   it("should return empty", async () => {
//     const feed = await factory.create("feed", { title: rss[0].title, link: rss[0].link })

//     let res = await createNewFeeds(rss)

//     expect(res).toEqual([])
//   })

// })

describe('sendSendEmailFeeds', () => {
  let feed
  const jestFn = jest.fn()

  beforeEach(async () => {
    email.sendEmailsMailgun = jestFn
    feed = await factory.create("feed")

    await sendSendEmailFeeds([feed])
  })

  it("should create feed", async () => {

    const feed = await Feed.findOne()

    console.log(feed)

    // expect(feed).toEqual(
    //   expect.objectContaining({
    //     name: "title",
    //     link: "link",
    //   })
    // )
  })

})
