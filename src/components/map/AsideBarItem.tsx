import { IItemsMapDescription } from "../../domain/map/ItemsMap";

interface IProps {
  item: IItemsMapDescription;
}

const AsideBarItem = ({item}: IProps) => {
  return (
    <li
      className="list__item"
      data-level={item.dataLevel}
      data-category={item.dataCategory}
      data-space={item.dataSpace}
    >
      <a href="#" className="list__link">
        {item.title}
      </a>
    </li>
  );
};

export default AsideBarItem;
