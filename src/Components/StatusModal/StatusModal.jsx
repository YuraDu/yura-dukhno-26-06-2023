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
import { TextField } from "@mui/material";
import { useState } from "react";
import { OFF } from "./../../Data/consts";

import "./StatusModal.css";

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
  const [invalidInput, setInvalidInput] = useState(false);

  const dispatch = useDispatch();
  const status = useSelector(state => state.general.gameStatus);

  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(setGameStatus(undefined));
    dispatch(setGameActive(false));
    dispatch(setNewGame());
  };

  const handleTextInputChange = event => {
    if (event.target.value.length > 5) {
      setInvalidInput(false);
    }
    setLeaderNickName(event.target.value);
  };

  const handleSaveHighScore = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (leaderNickName.length === "") {
      setInvalidInput(true);
    } else {
      dispatch(addLeader(leaderNickName));
      handleClose();
    }
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
              SAVE YOUR SCORE
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
                sx={
                  invalidInput
                    ? { border: "2px solid red", borderRadius: "4px" }
                    : { border: "2px solid transparent" }
                }
                value={leaderNickName}
                onChange={handleTextInputChange}
                inputProps={{ maxLength: 6 }}
              />
              <div
                style={!invalidInput ? {} : OFF}
                className={`status-modal-button ${
                  !invalidInput ? "" : "error"
                }`}
                onClick={handleSaveHighScore}
              >
                {t("save")}
              </div>
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
