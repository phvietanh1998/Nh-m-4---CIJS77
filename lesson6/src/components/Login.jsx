import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useLanguageContext } from "../context/context";

export default function Login(props) {
  const { language, languageObj } = useLanguageContext();

  return (
    <div sx={{ height: "100%" }}>
      <Card
        sx={{
          width: "30%",
          textAlign: "center",
          margin: "16% auto",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Box sx={{ height: 50, backgroundColor: "gray", marginBottom: 3 }}>
            <Typography
              sx={{
                padding: "15px 0 ",
                verticalAlign: "center",
                fontWeight: "bold",
              }}
              variant="body1"
              color="white"
            >
              {!props.isLogin
                ? languageObj[language].login
                : languageObj[language].text + ", " + props.userName}
            </Typography>
          </Box>

          {!props.isLogin && (
            <TextField
              onChange={props.handleChange}
              id="outlined-basic"
              variant="outlined"
              placeholder={languageObj[language].username}
              sx={{ width: 300, marginBottom: 3, textAlign: "center" }}
            />
          )}
        </CardContent>
        <CardActions sx={{ paddingTop: 0 }}>
          <Button
            onClick={props.handleClick}
            variant="contained"
            size="small"
            sx={{ margin: "0 auto" }}
          >
            {!props.isLogin
              ? languageObj[language].login
              : languageObj[language].logout}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
