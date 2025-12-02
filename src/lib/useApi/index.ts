import { useCallback, useState } from "react"
import axios from "axios"
import { route } from "../types"

export default function useApi<T extends any>({ url, method }: route) {
  const [data, setData] = useState<T | undefined>()
  const [error, setError] = useState<string | undefined>()
  const [isPending, setIsPending] = useState(false)

  const execute = useCallback(async (args: T) => {
    try {
      const buildstring = (url: string, params?: any): string => {
        if (!params) return url

        const keys = Object.keys(params)

        let final = url

        for (const k of keys) {
          final = final.replace(`{:${k}}`, params[k])
        }

        return final
      }

      setIsPending(true)

      const finalStringUrl = buildstring(url, args)

      const res = await axios.request({
        url: finalStringUrl,
        method,
        data: args
      })

      setData(res.data)
    } catch (err: any) {
      console.log(err)

      setData(undefined)
      setError(err.message)
    } finally {
      setIsPending(false)
    }
  }, [])

  return { data, error, isPending, execute }
}
