describe("attributes", () => {
  it("should have attributes", async () => {
    let feed = await factory.create('feed')

    expect(feed).toEqual(matchers.feed_db)
  })
})
