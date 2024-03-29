import axios from "axios";
import { createContext, useEffect, useState } from "react";
import SemVer from "semver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentVersion, setCurrentVersion] = useState("");
  const [newVersion, setNewVerion] = useState(false);

  const consultingVersion = async (currentVersion) => {
    const res = await axios.get(process.env.REACT_APP_GITHUB_API);
    const versionUpdate = SemVer.lt(currentVersion, res.data.tag_name); // current , new
    setNewVerion(versionUpdate);
  };

  const initialToast = () => {
    toast.warn("Hay una nueva version, refresca para actualizar", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      draggable: false,
      theme: "dark",
    });
  };

  useEffect(() => {
    let res = "";
    const consultCurrentVersion = async () => {
      res = await axios.get(process.env.REACT_APP_GITHUB_API);
      setCurrentVersion(res.data.tag_name);
    };
    consultCurrentVersion();
    initialToast();
    setInterval(() => {
      consultingVersion(res.data.tag_name);
    }, 900000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentVersion,
        setCurrentVersion,
        consultingVersion,
        newVersion,
        setNewVerion,
      }}
    >
      <h1>App</h1>
      <h2>Version actual: {currentVersion}</h2>
      {newVersion ? <ToastContainer /> : null}
      {children}
    </UserContext.Provider>
  );
};
