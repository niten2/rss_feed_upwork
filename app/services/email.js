import settings from "config/settings"
import mailgun from "config/mailgun"
import { buildHtml } from "app/services/utils"

export const sendEmailMailgun = async (html) => {
  const data = {
    from: 'rss feed upwork <me@samples.mailgun.org>',
    to: settings.email_to,
    subject: `UPWORK`,
    html,
  }

  return await mailgun.messages().send(data)
}
