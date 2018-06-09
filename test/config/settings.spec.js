import settings from "config/settings"

describe('settings', () => {
  it("should have valid env", async () => {
    expect(settings.name).toEqual("rss_upwork")
    expect(settings.env).toEqual(process.env.NODE_ENV)

    expect(settings.databaseUrl).toEqual(process.env.DATABASE_URL)

    expect(settings.rss_upwork).toEqual(process.env.RSS_UPWORK)
    expect(settings.email_to).toEqual(process.env.EMAIL_TO)

    expect(settings.mailgun.api_key).toEqual(process.env.MAILGUN_API_KEY)
    expect(settings.mailgun.domain).toEqual(process.env.MAILGUN_DOMAIN)
  })
})
