import React from "react";
import { IItemsMapDescription } from "../../domain/map/ItemsMap";

interface IProps {
  item: IItemsMapDescription;
}

const ItemMapDescription = ({ item }: IProps) => {
  return (
    <>
      <div className="content__item" data-space={item.dataSpace} data-category={item.dataCategory}>
        <h3 className="content__item-title">{item.title}</h3>
        <div className="content__item-details">
          <p className="content__meta">
            <span className="content__meta-item">
              <strong>Opening Hours:</strong> 6:30AM &mdash; 11:30PM
            </span>
            <span className="content__meta-item">
              <strong>Phone:</strong> (0) 66 5738902
            </span>
          </p>
          <p className="content__desc">
            {item.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemMapDescription;
