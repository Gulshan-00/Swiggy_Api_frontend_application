import { createContext } from "react";

const UserConstext= createContext({
    LogedInUser: "Unknown",
});

export default UserConstext;