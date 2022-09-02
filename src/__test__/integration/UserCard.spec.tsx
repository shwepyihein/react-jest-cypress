import React, { ReactNode } from "react"
import { render, screen } from "@testing-library/react"
import UserCard from "../../components/UserCard"
import { Router, Navigator } from "react-router-dom"
import { createMemoryHistory } from "history"
import userEvent from "@testing-library/user-event"
const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}))

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}

interface WrapperProps {
  children: ReactNode
}
const createRouterWrapper =
  (history: Navigator): React.ComponentType<WrapperProps> =>
  ({ children }) =>
    (
      <Router navigator={history} location={""}>
        {children}
      </Router>
    )

describe("List component testing", () => {
  test("render UserCard", () => {
    const { queryByTestId } = render(
      <UserCard user={user} handleDialog={() => {}} />
    )

    expect(queryByTestId("card")).toBeDefined()
  })

  test("should redirect and update history", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] })
    render(<UserCard user={user} handleDialog={() => {}} />, {
      wrapper: createRouterWrapper(history),
    })

    userEvent.click(screen.getAllByTestId(`edit_${user.id}`)[0])
    setTimeout(() => expect(history.location.pathname).toEqual("/update"), 3000)
  })
})
