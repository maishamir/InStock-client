import "./PageTitle.scss";
import arrowIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import SearchField from "../SearchField/SearchField.jsx";

function PageTitle({ title, showBack, showSearchAdd, showEdit }) {
  return (
    <div className="page-title">
      <div className="page-title__container">
        {showBack && (
          <img
            className="page-title__back-icon"
            src={arrowIcon}
            alt="back icon"
          />
        )}
        <h1 className="page-title__header">{title}</h1>
      </div>
      {showSearchAdd && (
        <div className="page-title__search-add">
          <SearchField />
          <button className="page-title__add-button">
            <p className="page-title__edit-text">+ Add New Warehouse</p>
          </button>
        </div>
      )}
      {showEdit && (
        <button className="page-title__edit-button">
          <img
            className="page-title__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
          <p className="page-title__edit-text">Edit</p>
        </button>
      )}
    </div>
  );
}

export default PageTitle;
