import { setStartFeeds } from 'app/services/rss'

describe('setStartFeeds', () => {

  it("should ", async () => {
    const rss = [
      {
        name: "name",
        link: "link",
      },
    ]

    await setStartFeeds(rss)

  })

})


