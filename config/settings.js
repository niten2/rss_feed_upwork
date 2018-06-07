import dotenv from 'dotenv'

const getPath = () => {
  if (process.env.NODE_ENV == "development.job") {
    return ".env"
  }

  if (process.env.NODE_ENV == "production.job") {
    return ".env.production"
  }

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
])

export default {
  name: process.env.APP_NAME || "rss_upwork",
  env: process.env.NODE_ENV,
  // port: process.env.PORT || 3001,
  // ws_port: process.env.WS_PORT || 3002,
  isEnvTest: process.env.NODE_ENV == "test",

  databaseUrl: process.env.DATABASE_URL,

  rss_upwork: process.env.RSS_UPWORK,
  // jwt_secret_key: process.env.JWT_SECRET_KEY,
  // redisUrl: process.env.REDIS_URL || "redis://127.0.0.1:6379",
}
