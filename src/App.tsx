import { Container } from "@mui/material";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Routes } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Container>
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
        </Routes>
      </Container>
    </>
  );
}

export default App;
