import settings from "config/settings"
import mailgun from "config/mailgun"

export const sendEmailMailgun = async ({ email, link, title }) => {
  if (!email || !link, !title) throw new Error("Email should be exist")

  const data = {
    from: 'rss feed upwork <me@samples.mailgun.org>',
    to: email,
    subject: `UPWORK ${title}`,
    html: `
      <br>
      <br>
      <br>
      <a href=${link}>
        <strong>
          ${title}
        </strong>
      </a>
    `
  }

  return await mailgun.messages().send(data)
}
