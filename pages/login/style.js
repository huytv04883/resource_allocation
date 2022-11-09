import { styled } from "@mui/system";

export const WrapperLoginForm = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ButtonLoginGoogle = styled("button")(({ theme }) => ({
  border: "none",
  display: "flex",
  alignItems: "center",
  borderRadius: "3px",
  boxShadow: "0 -1px 0 rgb(0 0 0 / 4%), 0 1px 1px rgb(0 0 0 / 25%)",
  cursor: "pointer",
  padding: "0 15px",
  background: "#fff",
  [theme.breakpoints.down("lg")]: {
    padding: "0 16px",
  },
  "&:hover": {
    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
  },
  "&:active": {
    backgroundColor: "#eeeeee",
  },
  "&:focus": {
    outline: "none",
    boxShadow:
      "0 -1px 0 rgba(0, 0, 0, .04),0 2px 4px rgba(0, 0, 0, .25), 0 0 0 3px #c8dafc",
  },
}));

export const TextLogin = styled("span")(({ theme }) => ({
  padding: "10px",
  color: "#757575",
  fontSize: "14px",
  fontWeight: 500,
}));
