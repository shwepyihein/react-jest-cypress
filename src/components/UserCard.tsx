import * as React from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../constant/type";

interface UserCardProps {
	user: UserType;
	handleDialog: (user: UserType) => void;
}

const UserCard = ({ user, handleDialog }: UserCardProps) => {
	const navigate = useNavigate();
	return (
		<div className="group border rounded-lg" data-testid="card">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<img
					src={`https://avatars.dicebear.com/api/croodles/${user.username}.svg`}
					alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
					className="h-full w-full object-cover object-center group-hover:opacity-75"
				/>
			</div>
			<div className="p-4">
				<h3 data-testid="card_name" className=" text-md text-gray-700">
					{user.name}
				</h3>

				<p className="mt-2 flex gap-[10px] text-sm font-sm text-gray-900">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
					</span>
					<span data-testid="card_phone">{user.phone}</span>
				</p>

				<p className="mt-2 flex gap-[10px] text-sm font-sm text-gray-900">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
							/>
						</svg>
					</span>
					<span data-testid="card_email">{user.email}</span>
				</p>

				<a
					className="mt-2 flex gap-[10px] text-sm font-sm text-gray-900"
					href={user.website}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
							/>
						</svg>
					</span>
					<span data-testid="card_website">{user.website}</span>
				</a>
			</div>

			<div className="w-full flex justify-between bg-gray-900">
				<button
					type="button"
					aria-label="love icon"
					className="relative w-full text-center focus:rounded-md  hover:text-red-300  bg-gray-200 border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-4 m-auto hover:text-red-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</button>
				<button
					type="button"
					aria-label="edit icon"
					onClick={() => {
						navigate(`/update/${user.id}`);
					}}
					className="relative w-full text-center focus:rounded-md  hover:text-red-300 -ml-px bg-gray-200  border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300"
          data-testid={`edit_${user.id}`}
          data-cy={`edit_${user.id}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-4 m-auto "
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
						/>
					</svg>
				</button>
				<button
					type="button"
					aria-label="delete icon"
					onClick={() => handleDialog(user)}
					className="relative  w-full text-center hover:text-red-300 -ml-px bg-gray-200  focus:rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-4 m-auto hover:text-red-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default UserCard;
