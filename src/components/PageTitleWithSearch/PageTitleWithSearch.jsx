import "./PageTitleWithSearch.scss";
import SearchField from "../SearchField/SearchField.jsx";

function PageTitle({ title, type }) {
  return (
    <div className="page-title">
      <div className="page-title__container">
        <h1 className="page-title__header">{title}</h1>
      </div>
      <div className="page-title__search-add">
        <SearchField />
        <button className="page-title__add-button">
          <p className="page-title__edit-text">+ Add New {type}</p>
        </button>
      </div>
    </div>
  );
}

export default PageTitle;
