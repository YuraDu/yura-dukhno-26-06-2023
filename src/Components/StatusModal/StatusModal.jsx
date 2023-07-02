import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  setGameActive,
  setGameStatus,
} from "../../Redux/reducers/generalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function StatusModal() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.general.gameStatus);

  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(setGameStatus(undefined));
    dispatch(setGameActive(false));
  };

  return (
    <Modal
      open={status || false}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {status === "won" ? t("winning") : t("losing")}
        </Typography>
      </Box>
    </Modal>
  );
}
