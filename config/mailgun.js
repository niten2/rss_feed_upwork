import Mailgun from "mailgun-js"
import settings from "config/settings"

const mailgun = Mailgun({
  apiKey: settings.mailgun_api_key,
  domain: settings.mailgun_domain
})

export default mailgun
