import { buildHtml } from 'app/services/utils'

describe('setStartFeeds', () => {

  it("should create feed", async () => {
    const data = [
      {
        title: "title1",
        link: "link1",
      },
      {
        title: "title2",
        link: "link2",
      },
    ]

    const res = buildHtml(data)

    // console.log(res)

    // expect(res).toContainEqual(`

    //     <br>
    //       <a href=link1>
    //         <strong>
    //           title1
    //         </strong>
    //       </a>
    //     <br>

    //     <br>
    //       <a href=link2>
    //         <strong>
    //           title2
    //         </strong>
    //       </a>
    //     <br>


    // `)

  })

})

