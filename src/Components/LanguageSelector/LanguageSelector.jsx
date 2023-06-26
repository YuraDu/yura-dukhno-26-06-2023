import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./LanguageSelector.css";

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { t, i18n } = useTranslation();

  const handleLanguageIconClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = lan => {
    i18n.changeLanguage(lan);
    handleMenuClose();
  };

  return (
    <div className="language-selector">
      <Toolbar>
        <Tooltip title="Select language">
          <IconButton onClick={handleLanguageIconClick}>
            <LanguageIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleMenuClick("en")}>{t("en")}</MenuItem>
        <MenuItem onClick={() => handleMenuClick("ru")}>{t("ru")}</MenuItem>
      </Menu>
    </div>
  );
}
