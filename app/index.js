import settings from "config/settings"
import Parser from "rss-parser"

// console.log(Parser)
// console.log(parser)

(async () => {
  let parser = new Parser()

  let feed = await parser.parseURL(settings.rss_upwork)

  console.log(feed.title)

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();
