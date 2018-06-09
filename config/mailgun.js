import Mailgun from "mailgun-js"
import settings from "config/settings"

const mailgun = Mailgun({
  apiKey: settings.mailgun.api_key,
  domain: settings.mailgun.domain,
})

export default mailgun
