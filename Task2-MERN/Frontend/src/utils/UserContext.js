import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "david",
    email: "david@dh.cion",
  },
});

export default UserContext;
