export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const buildHtml = (feeds) => {
  return feeds.reduce((acc, feed) => {
    return `
      ${acc}
      <br>
        <a href=${feed.link}>
          <strong>
            ${feed.title}
          </strong>
        </a>
      <br>
    `
  }, "")
}
