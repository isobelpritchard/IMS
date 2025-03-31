import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Pages/Global/Topbar";
import Sidebar from "./Pages/Global/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import AddStock from "./Pages/AddStock";
//import Reports from "./Pages/Reports";

function App() {
  const [theme, colourMode] = useMode();

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/add-stock" element={<AddStock />} />
              {/* <Route path="/reports" element={<Reports />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
