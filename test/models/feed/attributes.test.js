describe("attributes", () => {
  it("should have attributes", async () => {
    let user = await factory.create('feed')

    expect(user).toEqual(matchers.feed_db)
  })
})
