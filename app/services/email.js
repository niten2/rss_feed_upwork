import settings from "config/settings"
import mailgun from "config/mailgun"
import logger from "app/services/logger"
import { buildHtml } from "app/services/utils"

export const sendEmailMailgun = async (feeds) => {
  const html = buildHtml(feeds)

  const data = {
    from: 'rss feed upwork <me@samples.mailgun.org>',
    to: settings.email_to,
    subject: `UPWORK`,
    html,
  }

  if (settings.isEnvProd) {
    await mailgun.messages().send(data)
    logger.info("send email", data)
  } else {
    logger.info("send email action")
  }

  return feeds
}
