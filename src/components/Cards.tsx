import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { UserData } from "../api/types";

export const Cards = ({ users }: { users: Array<UserData> }) => {
  return (
    <ImageList
      sx={{ gridTemplateColumns: "repeat(auto-fill, 40px)" }}
      cols={3}
    >
      {users.map((user) => (
        <Card user={user} />
      ))}
    </ImageList>
  );
};

const Card = ({ user }: { user: UserData }) => {
  const { id, first_name, last_name, email, avatar } = user;
  return (
    <ImageListItem key={id}>
      <img
        srcSet={`${avatar}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${avatar}?w=248&fit=crop&auto=format`}
        alt={`${first_name} ${last_name}`}
        loading="lazy"
      />
      <ImageListItemBar
        title={`${first_name} ${last_name}`}
        subtitle={email}
      />
    </ImageListItem>
  );
};
