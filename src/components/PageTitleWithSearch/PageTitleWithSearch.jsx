import "./PageTitleWithSearch.scss";
import SearchField from "../SearchField/SearchField.jsx";

function PageTitleWithSearch({ title, type }) {
  return (
    <div className="page-title-search">
      <h1 className="page-title-search__header">{title}</h1>
      <div className="page-title-search__search-add">
        <SearchField />
        <button className="page-title-search__add-button">
          <p className="page-title-search__add-text">+ Add New {type}</p>
        </button>
      </div>
    </div>
  );
}

export default PageTitleWithSearch;
