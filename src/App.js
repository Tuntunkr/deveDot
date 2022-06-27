import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import List from "./Pages/List";
import Resource from "./Pages/Resource";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Libraries from "./Pages/Libraries"
import Network from "./Pages/Network";
import NodeSoftware from "./Pages/NodeSoftware"
import Protocols from "./Pages/Protocols";
import Service from "./Pages/Service";
import Tools from "./Pages/Tools"
import { CssBaseline} from "@material-ui/core";





function App() {
	return (
		<div>
		
			 <Header />
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path= "/community" element={<Community />} />
				<Route path= "/libraries" element={<Libraries/>} />
				<Route path="/network" element={<Network/>} />
				<Route path="/nodesoftware" element={<NodeSoftware/>} />
				<Route path="/protocols" element={<Protocols/>} />
				<Route path="/services" element={<Service/>} />
				<Route path="/tools" element={<Tools/>} /> 
				<Route path="/list" element={<List />} />
				<Route path="/resource" element={<Resource />} />


			</Routes>

		</div>
	);
}

export default App;
