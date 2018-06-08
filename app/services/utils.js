export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const buildHtml = (data) => {
  return data.reduce((acc, item) => {
    return `
      ${acc}
      <br>
        <a href=${item.link}>
          <strong>
            ${item.title}
          </strong>
        </a>
      <br>
    `
  }, "")
}

// export const createNewFeed = async (rss) => {
//   const newFeeds = (item) => {
//     let feed = await Feed.findOne({
//       where: {
//         title: item.title,
//         link: item.link,
//       }
//     })

//     if (feed) next

//     feed = await Feed.create({ title: item.title, link: item.link, sendEmail: true })

//     logger.info({ message: "feed created", title: item.title, link: item.link })

//     return feed
//   }

//   return await Promise.all(rss.map(newFeeds))
// }
