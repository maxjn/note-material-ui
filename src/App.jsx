import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
//Pages
import Note from "./pages/Note";
import Create from "./pages/Create";
import RootLayout from "./layouts/RootLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightBold: 900,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Note />} />
        <Route path="create" element={<Create />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
