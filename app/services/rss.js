import settings from "config/settings"
import Parser from "rss-parser"

export default getRss = () => {

  let parser = new Parser()
  let feed = await parser.parseURL(settings.rss_upwork)

  return feed
  // console.log(feed.title)

  // feed.items.forEach(item => {


  //   console.log(item.title + ':' + item.link)
  // });




}



// (async () => {

// })();

