import DefineSvgModels from "./components/DefineSvgModels"
import AsideBar from "./components/map/AsideBar"
import MallMap from "./components/map/MallMap"

function App() {

  return (
    <>
    <DefineSvgModels />
		<div className="container">
			<MallMap />
			<AsideBar />
			{/* <!-- /spaces-list --> */}
		</div>
		{/* <!-- /container --> */}
		
    </>
  )
}

export default App
