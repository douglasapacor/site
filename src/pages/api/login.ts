import { Api } from "@/lib/Api"
import getConfirmation from "@/repository/getConfirmation"
import getOldConfirmation from "@/repository/getOldConfirmation"
import getSalt from "@/repository/getSalt"
import { createHash } from "crypto"
import { sign } from "jsonwebtoken"
import z from "zod"

const validation = z.object({
  login: z.string({ error: "campo login inválido ou vazio." }),
  senha: z.string({ error: "campo senha inválido ou vazio." }),
  manterConectado: z.boolean()
})

export type loginParams = z.input<typeof validation>

const loginApi = new Api(
  validation,
  "post",
  async (data, res) => {
    const salt = await getSalt({ login: data.login })

    if (!salt) {
      return res.status(200).json({
        ok: false,
        error: "Não existe nenhum usuário cadastrado com esses dados."
      })
    }

    if (salt.idstatus_cliente > 2) {
      return res.status(200).json({
        ok: false,
        error:
          "Seu acesso encontra-se desativado. Entre em contato conosco para reativar."
      })
    }

    const hash = createHash("sha1")
    const fullHash = createHash("sha1")

    hash.update(data.senha)
    fullHash.update(`${hash.digest("hex")}${salt.idusuario}`)

    const contentToSearch = fullHash.digest("hex")
    let userConfirmed = null

    userConfirmed = await getConfirmation({
      email: data.login,
      senha: contentToSearch
    })

    if (!userConfirmed) {
      userConfirmed = await getOldConfirmation({
        email: data.login,
        senha: contentToSearch
      })
    }

    if (!userConfirmed) {
      return res.status(200).json({
        ok: false,
        error: "A senha informada está incorreta."
      })
    }

    const token = sign(
      JSON.stringify({
        idcliente: userConfirmed.idcliente,
        idusuario: userConfirmed.idusuario,
        idgrupo_site: userConfirmed.idgrupo_site,
        admin: userConfirmed.admin,
        autorizacao_trabalhista: userConfirmed.autorizacao_trabalhista
      }),
      process.env.KEY || ""
    )

    if (data.manterConectado) {
      const today = new Date()
      today.setFullYear(today.getFullYear() + 10)

      res.setHeader(
        "Set-Cookie",
        `credential=${token}; Path=/; Secure; Expires=${today.toUTCString()};`
      )
    } else {
      const today = new Date()
      const oneDate = new Date(today.getTime() + 8 * 60 * 60 * 1000)

      res.setHeader(
        "Set-Cookie",
        `credential=${token}; Path=/; Secure; Expires=${oneDate.toUTCString()};`
      )
    }

    res.status(200).json({
      ok: true,
      data: {
        nome: userConfirmed.nome,
        credential: token
      }
    })
  },
  {
    level: 0
  }
)

export default loginApi.nextHandler
