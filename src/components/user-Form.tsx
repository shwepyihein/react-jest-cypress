import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserType } from "../constant/type";

interface userFormProps {
	user: UserType | any;
	submitAction: (val: UserType) => void;
	submitText: string;
}

function UserForm({ user, submitText, submitAction }: userFormProps) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: user || {},
	});

	const navigate = useNavigate();

  return (
    <div>
      <form className="max-w-md mt-4" onSubmit={handleSubmit(submitAction)}>
        <div className="mt-3">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              data-cy="username"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="User Name"
              {...register("username", { required: true })}
            />
            <span className="text-red-300 text-sm ">
              {errors.username && "user name is required"}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
                   data-cy="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="example@gmail.com"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <span className="text-red-300 text-sm ">
              {errors.email &&
                errors.email.type === "required" &&
                "Email is required"}
              {errors.email &&
                errors.email.type === "pattern" &&
                "Provide a valid email address"}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            phone
          </label>
          <div className="mt-1">
            <input
              data-cy="phone"
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="phone"
              {...register("phone", { required: true })}
            />
            <span className="text-red-300 text-sm ">
              {errors.phone && "Phone is required"}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="webSite"
            className="block text-sm font-medium text-gray-700"
          >
            WebSite
          </label>
          <div className="mt-1">
            <input
              type="text"
              data-cy="website"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="website"
              {...register("website", { required: true })}
            />
            <span className="text-red-300 text-sm ">
              {errors.webSite && "WebSite is required"}
            </span>
          </div>
        </div>

				<div className="mt-5 sm:mt-4 sm:flex sm:pl-4">
					<button
						aria-label="submit"
						type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
            data-cy="UpdateUser"
					>
						{submitText}
					</button>
					<button
						aria-label="back"
						type="button"
						className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={() => navigate("/")}
					>
						Back
					</button>
				</div>
			</form>
		</div>
	);
}

export default UserForm;
