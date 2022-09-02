import { doDeleteItem, fetchUserList } from "../api/ApiService"
import { useMutation, useQuery } from "react-query"
import { UserType } from "../constant/type"
import UserCard from "../components/UserCard"
import Loading from "../components/loading"
import DeleteDialog from "../components/dialog"
import { useState } from "react"
import { toast } from "react-toastify"

function UserList() {
  const [open, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const {
    data: userList,
    error,
    isLoading,
    refetch,
  } = useQuery("users", fetchUserList)

  const { mutate: deletePost } = useMutation((id: number) => doDeleteItem(id), {
    onSuccess(data) {
      refetch()
      toast.success("User Card deleted successfully")
    },
    onError(error: any) {
      if (Array.isArray((error as any).data.error)) {
        ;(error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        )
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        })
      }
    },
  })

  if (isLoading) {
    return <Loading />
  }
  if (error instanceof Error) {
    return <div>Error! {error.message}</div>
  }

  const handleDelete = () => {
    setOpen(true)
    if (deleteId) {
      deletePost(deleteId)
    }
  }
  const handleDialog = (id: number) => {
    setDeleteId(id)
    setOpen(true)
  }

  return (
    <>
      {/* delete Dialog */}
      <DeleteDialog setOpen={setOpen} open={open} handleDelete={handleDelete} />
      {/* userlist */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-medium mb-5">List</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {userList.map((user: UserType, i: number) => {
              return (
                <UserCard user={user} key={i} handleDialog={handleDialog} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList
