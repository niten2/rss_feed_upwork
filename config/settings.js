import dotenv from 'dotenv'

const getPath = () => {
  if (process.env.NODE_ENV == "development" || !process.env.NODE_ENV) {
    return ".env"
  }

  return `.env.${process.env.NODE_ENV}`
}

const checkRequiredEnv = (envs) => {
  envs.map((env) => { if (!process.env[env]) {
      throw new Error(`process.env.${env} should be exist`)
    }
  })
}

dotenv.config({ path: getPath() })

checkRequiredEnv([
  "DATABASE_URL",
  "RSS_UPWORK",

  "MAILGUN_API_KEY",
  "MAILGUN_DOMAIN",
  "EMAIL_TO",
])

export default {
  name: process.env.APP_NAME || "rss_upwork",
  env: process.env.NODE_ENV,
  isEnvTest: process.env.NODE_ENV == "test",

  databaseUrl: process.env.DATABASE_URL,

  rss_upwork: process.env.RSS_UPWORK,
  email_to: process.env.EMAIL_TO,

  mailgun: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
}
