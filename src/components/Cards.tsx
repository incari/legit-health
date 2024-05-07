import { ImageList } from "@mui/material";
import { UserData } from "../api/types";

import { Card } from "./Card";
import { Link } from "react-router-dom";

export const Cards = ({ users }: { users: Array<UserData> }) => {
  return (
    <ImageList cols={3}>
      {users.map((user) => (
        <Link
          key={user.id}
          to={"user/" + user.id}
        >
          <Card
            key={user.id}
            user={user}
          />
        </Link>
      ))}
    </ImageList>
  );
};
