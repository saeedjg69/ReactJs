import cars from "./cars.json";
import Item from "./Item";

const ItemsList = () => {
 return (
  <>
   {cars.map((car) => (
    <Item
     status={car.details.status}
     title={car.details.title}
     plaque={car.details.plaque}
     columns={car.columns}
    />
   ))}
  </>
 );
};

export default ItemsList;
