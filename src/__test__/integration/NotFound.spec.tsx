import { render, RenderResult } from "@testing-library/react"
import NotFound from "../../pages/NotFound"
const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}))

let documentBody: RenderResult
describe("<NotFound />", () => {
  beforeEach(() => {
    documentBody = render(<NotFound />)
  })
  it("shows not found message", () => {
    expect(documentBody.getByText("Page not found")).toBeInTheDocument()
    expect(documentBody.getByText("404")).toBeInTheDocument()
  })
})
