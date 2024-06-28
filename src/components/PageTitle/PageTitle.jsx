import { Link } from "react-router-dom";
import "./PageTitle.scss";
import arrowIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";

function PageTitle({ backLink, title, showEdit, editLink }) {
  return (
    <div className="page-title">
      <div className="page-title__container">
        <Link className="page-title__back-link" to={backLink}>
          <img
            className="page-title__back-icon"
            src={arrowIcon}
            alt="back icon"
          />
        </Link>
        <h1 className="page-title__header">{title}</h1>
      </div>
      {showEdit && (
        <Link to={editLink}>
          <div className="page-title__edit-button">
            <img
              className="page-title__edit-icon"
              src={editIcon}
              alt="edit icon"
            />
            <p className="page-title__edit-text">Edit</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PageTitle;
