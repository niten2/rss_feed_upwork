export default {

  feed_db: expect.objectContaining({
    id: expect.any(Number),

    name: expect.any(String),
    link: expect.any(String),
    sendEmail: expect.any(Boolean),

    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  }),

}
