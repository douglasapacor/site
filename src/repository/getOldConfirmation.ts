import database from "@/lib/database"
import { RowDataPacket } from "mysql2"

interface getOldConfirmationParams {
  email: string
  senha: string
}

interface getOldConfirmationResult {
  idcliente: number
  idstatus_cliente: number
  idusuario: number
  nome: string
  idgrupo_site: number
  autorizacao_trabalhista: string
  admin: string
  ultimo_login: Date
  login_antigo: string
  email_antigo: string
}

const sql = ""

export default async function getOldConfirmation({
  email,
  senha
}: getOldConfirmationParams) {
  try {
    const conn = await database.getConnection()
    const [QueryResult] = await conn.execute<RowDataPacket[]>({
      sql: sql,
      values: [email, senha]
    })

    return QueryResult[0][0] as getOldConfirmationResult
  } catch (error: any) {
    throw new Error(error.message)
  }
}
