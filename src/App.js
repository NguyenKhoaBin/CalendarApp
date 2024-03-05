import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

function App() {
  return (
    <div>
      <p className="bg-[#DFF9F7] gap-5 min-h-screen w-full py-5 px-[150px] flex">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </p>
    </div>
  );
}

export default App;
