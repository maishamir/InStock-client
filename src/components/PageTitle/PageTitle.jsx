import "./PageTitle.scss";
import arrowIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";

function PageTitle({ title, showEdit }) {
  return (
    <div className="page-title">
      <img src={arrowIcon} alt="arrow icon" />
      <h1>{title}</h1>
      {showEdit && (
        <div className="page-title__edit-button">
          <img src={editIcon} alt="edit icon" />
        </div>
      )}
    </div>
  );
}

export default PageTitle;
