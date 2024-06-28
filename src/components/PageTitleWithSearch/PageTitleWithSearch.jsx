import { Link } from "react-router-dom";
import "./PageTitleWithSearch.scss";
import SearchField from "../SearchField/SearchField.jsx";

function PageTitleWithSearch({ title, editLink, type }) {
  return (
    <div className="page-title-search">
      <h1 className="page-title-search__header">{title}</h1>
      <div className="page-title-search__search-add">
        <SearchField />
        <Link to={editLink}>
          <div className="page-title-search__add-button">
            <p className="page-title-search__add-text">+ Add New {type}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageTitleWithSearch;
