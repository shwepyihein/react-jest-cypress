import React, { useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { doUpdateItem, fetchUser } from "../api/ApiService"
import Loading from "../components/loading"
import UserForm from "../components/user-Form"
import { UserType } from "../constant/type"

const UserUpdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: userDetail,
    error,
    isLoading,
    isError,
  } = useQuery(["user", { id }], fetchUser)

  const mutation = useMutation(
    (d: UserType) => doUpdateItem(userDetail.id, d),
    {
      onSuccess(data) {
        toast.success("User Card Update successfully")
        setTimeout(() => {
          navigate("/")
        }, 1000)
      },
      onError(error: any) {
        toast.error("something is wrong", {
          position: "top-right",
        })
      },
    }
  )

  const { isSuccess } = mutation

  const onSubmit = (data: UserType | any) => {
    mutation.mutate(data)
  }

  if (isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="h-screen justify-center flex items-center px-24  sm:mt-0 bg-gray-300">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              User Information
            </h3>
          </div>
        </div>
        {isLoading && <Loading />}
        <div className="mt-5 md:col-span-3 md:mt-0">
          {userDetail && (
            <UserForm
              submitText={"update"}
              user={userDetail}
              submitAction={onSubmit}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserUpdate
