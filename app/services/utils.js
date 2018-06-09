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
