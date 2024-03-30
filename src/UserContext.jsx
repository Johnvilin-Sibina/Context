import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  // console.log(children);

//   return (
//     <UserContext.Provider value={"Hello Guvi"}>{children}</UserContext.Provider>
//   );

const [userName, setUserName] = useState("Default");
return (
   <UserContext.Provider value={{userName, setUserName}}>
      {children}
   </UserContext.Provider>
)
};

export default UserContext;
