import Header from "./Header";
import Month from "./Month";

export default function index() {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-md shadow-sm h-fit">
      <Header />
      <Month />
    </div>
  );
}
