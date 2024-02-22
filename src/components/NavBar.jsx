import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlay,
  faMaximize,
  faPenToSquare,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ handleRunCode, srcDoc }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  // console.log(isAuthenticated);
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
      <h1 className="text-2xl text-blue-500 font-semibold flex-1">
        Code <span className="text-red-500 text-2xl">Craft</span>
        <FontAwesomeIcon
          className="ml-2 text-2xl text-green-500"
          icon={faPenToSquare}
        />
      </h1>

      {isAuthenticated && (
        <h1 className="text-white">
          Hello
          <span className="font-bold ml-2 text-blue-500">{user?.nickname}</span>
        </h1>
      )}

      {isAuthenticated ? (
        <button
          className="bg-blue-500 mx-2 text-white font-bold px-4 py-1 rounded hover:bg-blue-600"
          onClick={() => {
            const result = confirm("Are you sure do you want to LOGOUT ?");
            if (result) logout();
          }}
        >
          LOG OUT
          <FontAwesomeIcon className="ml-2" icon={faArrowRightFromBracket} />
        </button>
      ) : (
        <button
          className="bg-blue-500 mx-2 text-white font-bold px-4 py-1 rounded hover:bg-blue-600"
          onClick={() => loginWithRedirect()}
        >
          <FontAwesomeIcon className="mr-2" icon={faUser} /> LOG IN
        </button>
      )}
      <button
        title="Full screen preview"
        className="bg-yellow-500 mx-2 text-white px-4 py-1 rounded hover:bg-yellow-600"
        onClick={handleOpenNewTab}
      >
        <FontAwesomeIcon icon={faMaximize} />
      </button>
      <button
        title="Run"
        className="bg-green-500 mx-2 text-white px-4 py-1 rounded hover:bg-green-600"
        onClick={isAuthenticated ? handleRunCode : loginWithRedirect}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </nav>
  );
};

export default Navbar;
