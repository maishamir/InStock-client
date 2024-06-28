import { Link, useNavigate } from "react-router-dom";
import "./PageTitle.scss";
import arrowIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton.jsx";

function PageTitle({ backLink, title, showEdit, editLink }) {
  const navigate = useNavigate();

  const handleEditClick = (event) => {
    event.preventDefault();
    navigate(editLink);
  };

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
        // <button className="page-title__edit-button" onClick={handleEditClick}>
        //   <img
        //     className="page-title__edit-icon"
        //     src={editIcon}
        //     alt="edit icon"
        //   />
        //   <p className="page-title__edit-text">Edit</p>
        // </button>
        <PrimaryButton
          buttonExtraClass="page-title__edit-button"
          onClick={handleEditClick}
          // iconExtraClass="page-title__edit-icon"
          // iconSrc={editIcon}
          // iconAlt="edit icon"
          buttonText="Edit"
          // textClass="page-title__hidden-text"
        >
          <img
            className="page-title__edit-icon"
            src={editIcon}
            alt="edit icon"
          />
          {/* <p className="page-title__edit-text">Edit</p> */}
        </PrimaryButton>
      )}
    </div>
  );
}

export default PageTitle;
