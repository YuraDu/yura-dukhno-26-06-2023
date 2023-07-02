import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import {
  addLeader,
  setGameActive,
  setGameStatus,
  setNewGame,
} from "../../Redux/reducers/generalSlice";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

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
  const [leaderNickName, setLeaderNickName] = useState("");

  const dispatch = useDispatch();
  const status = useSelector(state => state.general.gameStatus);

  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(setGameStatus(undefined));
    dispatch(setGameActive(false));
    dispatch(setNewGame());
  };

  const handleTextInputChange = event => {
    setLeaderNickName(event.target.value.slice(0, 5));
  };

  const handleSaveHighScore = () => {
    dispatch(addLeader(leaderNickName));
    handleClose();
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
        {status === "won" && (
          <>
            <Typography
              sx={{ textAlign: "center" }}
              id="modal-modal-description"
              variant="body1"
              component="p"
            >
              {t("saveHighScorePrompt")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <TextField
                value={leaderNickName}
                onChange={handleTextInputChange}
                inputProps={{ maxLength: 5 }}
              />
              <Button variant="contained" onClick={handleSaveHighScore}>
                {t("save")}
              </Button>
            </Box>
          </>
        )}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Box>
      </Box>
    </Modal>
  );
}
