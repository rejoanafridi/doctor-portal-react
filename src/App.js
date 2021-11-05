import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Services from "./Components/Pages/Services/Services";
function App() {
	return (
		<div className="App">
			<Home />
      <Services />
			<Router>
				<Routes>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/users">{/* <User /> */}</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
