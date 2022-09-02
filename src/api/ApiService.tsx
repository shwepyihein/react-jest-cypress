import axios from "axios"
import { UserType } from "../constant/type"

export const fetchUserList = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
  return data
}

export const fetchUser = async ({ queryKey }: any) => {
  const [_key, { id }] = queryKey
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  return response.data
}
export const doUpdateItem = async (
  id: number | string,
  updateData: UserType
) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    updateData
  )
  return data
}

export const doDeleteItem = async (id: number | string) => {
  const { data } = await axios.delete(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return data
}
