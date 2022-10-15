import qs from "querystring"
import http from "https"
import { config } from "../config/config"

export const sendWhatsappMsg = (
  body = { to: "", msg: "", priority: "1", referenceId: "" }
) => {
  const whatsappRes = http.request(config.whatsapp.options, function (res) {
    var chunks = []

    whatsappRes.on("data", function (chunk) {
      chunks.push(chunk)
    })

    whatsappRes.on("end", function () {
      var body = Buffer.concat(chunks)
      console.log(body.toString())
    })
  })

  whatsappRes.write(
    qs.stringify({
      token: config.whatsapp.token,
      to: body?.to,
      body: body?.msg,
      priority: body?.priority,
      referenceId: body?.referenceId
    })
  )
  whatsappRes.end()
}
