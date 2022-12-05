import ItemsList from "./ItemsList";

function App() {
 return (
  <div className="bg-gray-200">
   <div className="bg-white h-16 border">navbar</div>
   <div className="h-16 border rounded-xl border-white m-5">لیست خودروها</div>
   <div className="md:flex justify-evenly gap-5 p-5">
    <div className="border border-white rounded-xl md:w-1/4 h-80">sidebar</div>
    <div className="md:w-3/4">
     <ItemsList />
    </div>
   </div>
  </div>
 );
}

export default App;
