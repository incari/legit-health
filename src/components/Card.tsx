import { UserData } from "../api/types";
import { ImageListItem, ImageListItemBar } from "@mui/material";

export const Card = ({ user }: { user: UserData }) => {
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
