import React from "react";
import AsideBarItem from "./AsideBarItem";
import { itemsMapDescriptionFakeData } from "../../domain/fakedata/itemsMap";

const AsideBar = () => {
  return (
    <>
      <aside className="spaces-list" id="spaces-list">
        <div className="search">
          <input className="search__input" placeholder="Search..." />
          <button
            className="boxbutton boxbutton--darker close-search"
            aria-label="Close details"
          >
            <svg className="icon icon--cross">
              <use xlinkHref="#icon-cross"></use>
            </svg>
          </button>
        </div>
        <span className="label">
          <input
            id="sort-by-name"
            className="label__checkbox"
            type="checkbox"
            aria-label="Show alphabetically"
          />
          <label className="label__text">A - Z</label>
        </span>
        <ul className="list grouped-by-category">
          {itemsMapDescriptionFakeData.map(el => <AsideBarItem item={el} />)}
        </ul>
      </aside>
    </>
  );
};

export default AsideBar;
