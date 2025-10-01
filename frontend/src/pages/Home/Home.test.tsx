import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"
import { render, screen, waitFor } from "@testing-library/react"
import { Home } from "./index"

const handlers = [
  http.get("http://localhost:8000/pokemons", () => {
    return HttpResponse.json([
      { id: 1, name: "bulbasaur", height: 7, weight: 69 },
      { id: 2, name: "ivysaur", height: 10, weight: 130 },
      { id: 7, name: "squirtle", height: 5, weight: 90 },
    ])
  }),
]
export const server = setupServer(...handlers)

describe("<Home />", () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

  it("should display squirtle", async () => {
    render(<Home />)
    expect(screen.findByText("squirtle")).resolves.toBeVisible()
  })

  it("should display ivysaur", async () => {
    render(<Home />)
    expect(screen.findByText("ivysaur")).resolves.toBeVisible()
  })

  it("should display bulbasaur", async () => {
    render(<Home />)
    expect(screen.findByText("bulbasaur")).resolves.toBeVisible()
  })
})
