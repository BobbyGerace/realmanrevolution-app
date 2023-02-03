import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* @ts-ignore */
import SignIn from "./SignIn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Learn from "./Learn";

// react-router route config, includes sign in page and root page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Learn />,
  },
  { path: "/signin", element: <SignIn /> },
]);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
