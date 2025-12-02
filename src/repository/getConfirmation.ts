import database from "@/lib/database"
import { RowDataPacket } from "mysql2"

interface getConfirmationParams {
  email: string
  senha: string
}

interface getConfirmationResult {
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

const sql = `
  SELECT 
    c.idcliente, 
    c.idstatus_cliente, 
    u.idusuario_site AS idusuario, 
    u.nome, 
    g.idgrupo_site, 
    u.autorizacao_trabalhista,
    u.admin,
    ultimo_login, 
    login_antigo, 
    email_antigo
  FROM usuario_site u, cliente c, grupo_site g 
  WHERE c.exc = 'N'
    AND u.exc = 'N'
    AND u.idcliente = c.idcliente 
    AND c.idgrupo_site = g.idgrupo_site 
    AND u.email = ?
    AND u.senha = ?
  LIMIT 1;`

export default async function getConfirmation({
  email,
  senha
}: getConfirmationParams) {
  try {
    const conn = await database.getConnection()

    const [QueryResult] = await conn.execute<RowDataPacket[]>({
      sql: sql,
      values: [email, senha]
    })

    return QueryResult[0][0] as getConfirmationResult
  } catch (error: any) {
    throw new Error(error.message)
  }
}
