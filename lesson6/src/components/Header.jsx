import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLanguageContext } from "../context/context";

export default function Header(props) {
  const { language, languageObj } = useLanguageContext();
  return (
    <div>
      <AppBar sx={{ position: "static", flexGrow: 1, backgroundColor: "gray" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            MindX
          </Typography>
          <Typography variant="body2">
            {!props.isLogin
              ? languageObj[language].login
              : languageObj[language].text + ", " + props.userName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
