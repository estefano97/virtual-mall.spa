import { itemsMapDescriptionFakeData } from "../../domain/fakedata/itemsMap";
import ItemMapDescription from "./ItemMapDescription";

const MapDescriptionItems = () => {
  return (
    <div>
      {itemsMapDescriptionFakeData.map(el => <ItemMapDescription item={el}/>)}
    </div>
  );
};

export default MapDescriptionItems;
