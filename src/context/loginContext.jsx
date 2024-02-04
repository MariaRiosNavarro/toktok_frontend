import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/login-user",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        let json = await response.json();

        console.log("--------------user------JA", json);
        setLoginUser(json);
      } else {
        navigate("/loading");
      }
    }
    getUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loginUser, setLoginUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};