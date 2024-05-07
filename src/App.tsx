import { Container } from "@mui/material";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Routes } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="user/:id"
          element={<Detail />}
        />
        <Route
          path="/new"
          element={<FormPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Container>
  );
}

export default App;
