import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import CustomSidebar from "./scenes/global/CustomSidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import Faq from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Router>
						<div className="app">
							<CustomSidebar isSidebar={isSidebar} />
							<main className="content">
								<Topbar />
								<Routes>
									<Route path="/" element={<Dashboard />} />
									<Route path="/team" element={<Team />} />
									<Route path="/contacts" element={<Contacts />} />
									<Route path="/invoices" element={<Invoices />} />
									<Route path="/form" element={<Form />} />
									<Route path="/bar" element={<Bar />} />
									{/* <Route path="/pie" element={<Pie />} /> */}
									<Route path="/line" element={<Line />} />
									<Route path="/faq" element={<Faq />} />
									<Route path="/geography" element={<Geography />} />
									<Route path="/faq" element={<Faq />} />
									<Route path="/calendar" element={<Calendar />} />
								</Routes>
							</main>
						</div>
					</Router>
				</CssBaseline>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
