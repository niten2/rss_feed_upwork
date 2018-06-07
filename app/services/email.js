import settings from "config/settings"
import mailgun from "config/mailgun"

export const sendEmailMailgun = async ({ email, link, name }) => {
  if (!email || !link) {
    throw new Error("Email should be exist")
  }

  // const user = await User.findOne({ "email": email })

  // if (!user) {
  //   throw new Error("User by email not found")
  // }

  // let link = `${settings.confirm_email_url}?code=${user.cofirmCode}`

  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: email,
    subject: `UPWORK ${name}`,
    html: `
      Hello,
      <br>
      ${name}
      <br>
      <a href=${link}>
        Click here
      </a>
    `
  }

  return await mailgun.messages().send(data)
}

