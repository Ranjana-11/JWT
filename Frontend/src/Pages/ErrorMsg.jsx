import { Link } from "react-router";
import { CiFaceFrown } from "react-icons/ci";
function ErrorMsg() {
  return (
    <>
      <center>
        <h1>
          {" "}
          Page Not Found <CiFaceFrown />
        </h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>Click the button below to return to the home page.</p>
        <Link to="/signup">
          <button>Go to Home Page</button>
        </Link>
      </center>
    </>
  );
}
export default ErrorMsg;
