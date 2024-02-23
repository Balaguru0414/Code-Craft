import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlay,
  faMaximize,
  faPenToSquare,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = ({ handleRunCode, srcDoc }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  // console.log(user);

  const handleOpenNewTab = () => {
    if (isAuthenticated) {
      const newTab = window.open();
      newTab.document.write(srcDoc);
    } else {
      loginWithRedirect();
    }
  };

  return (
    <nav className="flex sticky top-0 z-50 items-center bg-black justify-between p-2">
      <Link to="/" className="text-2xl text-blue-500 font-semibold flex-1">
        <FontAwesomeIcon
          className="mr-2 text-3xl text-green-500"
          icon={faPenToSquare}
        />
        Code <span className="text-red-500 text-2xl">CRAFT</span>
      </Link>

      {/* %%%%%%%%%% Side nabvar buttons %%%%%%%%%% */}

      {isAuthenticated && (
        <h1 className="text-white max-md:hidden cursor-pointer">
          Hello,
          <span className="font-bold ml-2 text-blue-500">{user?.name}</span>
        </h1>
      )}

      {/* %%%%%%%%%% LOGOUT AND IMAGE %%%%%%%%%% */}
      {isAuthenticated ? (
        <img
          src={user?.picture}
          title={user?.name}
          alt={user?.name}
          className=" lg:hidden hover:scale-110 w-10 h-10 rounded-full cursor-pointer"
          onClick={() => {
            const result = confirm("Are you sure do you want to LOGOUT ?");
            if (result) logout();
          }}
        />
      ) : (
        <button
          className="bg-blue-500 lg:hidden mx-2 hover:scale-110 text-white font-bold px-4 py-1 rounded hover:bg-blue-600"
          onClick={() => loginWithRedirect()}
        >
          <FontAwesomeIcon className="mr-2" icon={faUser} /> LOG IN
        </button>
      )}
      {/* %%%%%%%%%% LOGOUT AND LOGIN %%%%%%%%%% */}
      <button
        className="bg-blue-500 max-md:hidden hover:scale-110 mx-2 text-white font-bold px-4 py-1 rounded hover:bg-blue-600"
        onClick={() => {
          if (isAuthenticated) {
            const result = confirm("Are you sure do you want to LOGOUT ?");
            if (result) logout();
          } else {
            loginWithRedirect();
          }
        }}
      >
        {isAuthenticated ? "LOG OUT" : "LOG IN"}
        <FontAwesomeIcon
          className="ml-2"
          icon={isAuthenticated ? faArrowRightFromBracket : faUser}
        />
      </button>

      {/* %%%%%%%%%% FULL SCREEN %%%%%%%%%% */}
      <button
        title="Full screen preview"
        className="bg-yellow-500 mx-2 text-white px-4 py-1 rounded hover:scale-110 hover:bg-yellow-600"
        onClick={handleOpenNewTab}
      >
        <FontAwesomeIcon icon={faMaximize} />
      </button>
      {/* %%%%%%%%%% RUN %%%%%%%%%% */}
      <button
        title="Run"
        className="bg-green-500 mx-2 text-white px-4 py-1 rounded hover:scale-110 hover:bg-green-600"
        onClick={isAuthenticated ? handleRunCode : loginWithRedirect}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </nav>
  );
};

export default Navbar;
