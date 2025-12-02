import database from "@/lib/database"
import { RowDataPacket } from "mysql2"

interface salt {
  idusuario: number
  idstatus_cliente: number
}

interface getSaltParams {
  login: string
}

const sql = `
  SELECT 
    us.idusuario_site AS idusuario, 
    c.idstatus_cliente 
  FROM usuario_site us, cliente c
  WHERE 
    c.exc = 'N'
  AND 
    us.exc = 'N'
  AND 
    us.idcliente = c.idcliente
  AND
    (us.email = ? OR c.login_antigo = ?)
  ORDER BY us.idusuario_site DESC
  LIMIT 1;
`

export default async function getSalt({ login }: getSaltParams): Promise<salt> {
  try {
    const conn = await database.getConnection()
    const result = await conn.execute<RowDataPacket[]>({
      sql: sql,
      values: [login, login]
    })

    return result[0][0] as salt
  } catch (error: any) {
    throw new Error(error.message)
  }
}
