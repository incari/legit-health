import {
  FormControl,
  TextField,
  Button,
  Alert,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateUser } from "../api";
import { NewUser } from "../api/types";

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewUser>();

  const { mutate, isPending, isSuccess, isError } = useCreateUser(reset);

  const onSubmit: SubmitHandler<NewUser> = (data) => {
    mutate(data);
  };

  return (
    <>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          gap: 2,
          maxWidth: 500,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4"> Create new user</Typography>
        <TextField
          label={errors.email ? "Email Required" : "Email"}
          variant="outlined"
          error={Boolean(errors.email)}
          fullWidth
          type="email"
          {...register("email", { required: true })}
        />
        <TextField
          label={errors.first_name ? "Fist Name Required" : "First Name"}
          error={Boolean(errors.first_name)}
          variant="outlined"
          fullWidth
          type="text"
          {...register("first_name", { required: true })}
        />
        <TextField
          label={errors.last_name ? "Last Name Required" : "Last Name"}
          error={Boolean(errors.last_name)}
          variant="outlined"
          fullWidth
          type="text"
          {...register("last_name", { required: true })}
        />
        <TextField
          label="Avatar"
          variant="outlined"
          fullWidth
          type="text"
          {...register("avatar")}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isPending}
          fullWidth
        >
          Create user
        </Button>
        {isSuccess && <Alert severity="success">New user created</Alert>}
        {isError && (
          <Alert severity="error">
            Failing creating the user, please try again
          </Alert>
        )}
      </FormControl>
    </>
  );
};
