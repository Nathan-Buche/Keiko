import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { Pokemon } from "./pages/Pokemon"
import { Pokedex } from "./pages/Pokedex"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pokedex/0" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/pokedex/:pageNumber" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
