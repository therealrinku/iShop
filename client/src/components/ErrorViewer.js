import "../css/ErrorViewer.css";

const ErrorViewer = ({ errorMessage }) => {
  return (
    <div className="error--viewer">
      <p>
        {errorMessage}, try
        <button className="reload-btn" onClick={() => window.location.reload()}>
          reloading
        </button>
        the page.
      </p>
    </div>
  );
};

export default ErrorViewer;
