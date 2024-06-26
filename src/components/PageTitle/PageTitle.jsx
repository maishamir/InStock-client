import "./PageTitle.scss";
import arrowIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";

function PageTitle({ title, showEdit }) {
  return (
    <div className="page-title">
      <div className="page-title__container">
        <img
          className="page-title__back-icon"
          src={arrowIcon}
          alt="back icon"
        />
        <h1 className="page-title__header">{title}</h1>
      </div>
      {showEdit && (
        <div className="page-title__edit-button">
          <img
            className="page-title__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
          <p className="page-title__edit-text">Edit</p>
        </div>
      )}
    </div>
  );
}

export default PageTitle;
