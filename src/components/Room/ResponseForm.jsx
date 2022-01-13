import "./responseForm.scss";

const ResponseForm = ({ className, id, user, onClick }) => {
  return (
    <button className={className} id={id} type="button" onClick={onClick} disabled={false}>
      Response {user + 1}
    </button>
  );
};

export default ResponseForm;
