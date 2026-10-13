import ProductCard from "./components/ProductCard";



function App() {
  return (
    <div className="grid grid-cols-3 gap-4"  >
      <ProductCard image="https://picsum.photos/300/200" title="Laptop" category="electronics" price="49" />
      <ProductCard image="https://fastly.picsum.photos/id/256/300/200.jpg?hmac=OEWsyACnQhck2yyIstwi4GYUggOuNhvKAP12c8ciXdM" title="pc" category="informatique" price="79" />
      <ProductCard image="https://fastly.picsum.photos/id/997/300/200.jpg?hmac=dLJ1PQmtDOqFj1QsmFHLkdTyUzcUpf9-qPpFCbgHBzQ" title="ram" category="electronics" price="15" />
    </div>
    
  );
}

export default App;