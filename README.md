# Rss feed upwork
---

sending letters to your email if new jobs appear in the upwork feed

# Setup

  - cp .env.sample .env.production
  - add your .env.production

  - npm run db:migrate
  - npm run script:set_start_feed:production
  - npm run job:production

  - docker-compose up
