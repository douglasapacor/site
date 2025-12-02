import z from "zod"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { Method, settings } from "../types"

export class Api<T extends z.ZodTypeAny> {
  public nextHandler: NextApiHandler

  constructor(
    schema: T,
    method: Method,
    handler: (data: z.infer<T>, res: NextApiResponse) => Promise<void>,
    settings: settings
  ) {
    this.nextHandler = async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        if (!req.method) {
          return res.status(400).json({
            ok: false,
            error: "method undefined."
          })
        }

        const treatedMethodValue = req.method.toLowerCase()

        if (treatedMethodValue !== method) {
          return res.status(400).json({
            ok: false,
            error: "method not allowed."
          })
        }

        const parsed = await schema.safeParseAsync({
          ...req.query,
          ...req.body
        })

        if (!parsed.success) {
          return res.status(400).json({
            ok: false,
            error: parsed.error.issues[0].message
          })
        }

        if (settings.level === 0) {
          return await handler(parsed.data, res)
        }

        if (settings.level === 1) {
          // usuário precisa ter token
          return await handler(parsed.data, res)
        }

        if (settings.level === 2) {
          // usuário precisa ter token e permissao
          return await handler(parsed.data, res)
        }
      } catch (error: any) {
        res.status(500).send({ error: error.message })
      }
    }
  }
}
