import { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { BookService } from "../../service/BookService";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FaSearch, FaHeart, FaPhone, FaBook } from "react-icons/fa";
import logo from "../../assets/images/searchBg.jpeg";
import { useAppContext } from "../../context/appContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Stats = () => {
  const { getBooks, books, isLoading } = useAppContext();
  const [bookList, setBookList] = useState([]);
  const [load, setLoad] = useState();

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);
  // if (books == "undefined") {
  //   setLoad(true);
  //   console.log("======", books, isLoading);
  // } else {
  //   setLoad(false);
  setTimeout(() => {
    setBookList(books);
  }, 1000);
  // }

  // console.log(books);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#00000000",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                BOOK LIBRARY
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <FaSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button
                sx={{
                  backgroundColor: "#ff7f00",
                  "&:hover": {
                    backgroundColor: "#c96400",
                  },
                }}
                variant="contained"
              >
                Search
              </Button>
              <Box
                sx={{
                  margin: "0px 15px 0px 15px",
                  fontSize: "25px",
                }}
              >
                <FaHeart />
              </Box>
              <Box
                sx={{
                  margin: "0px 15px 0px 0px",
                  fontSize: "25px",
                }}
              >
                <FaPhone />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "white",
            background: { logo },
            p: "20px",
          }}
        >
          <Box
            sx={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "30px",
              width: "100%",
            }}
          >
            <FaBook />
            <Typography>stories</Typography>
          </Box>
          <Box
            sx={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "30px",
              width: "100%",
            }}
          >
            <FaBook />
            <Typography>stories</Typography>
          </Box>
          <Box
            sx={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "30px",
              width: "100%",
            }}
          >
            <FaBook />
            <Typography>stories</Typography>
          </Box>
          <Box
            sx={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "30px",
              width: "100%",
            }}
          >
            <FaBook />
            <Typography>stories</Typography>
          </Box>
          <Box
            sx={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "30px",
              width: "100%",
            }}
          >
            <FaBook />
            <Typography>stories</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        component="form"
        // onSubmit={onBookSubmit}
        sx={{ flexGrow: 1, backgroundColor: "white", p: "20px" }}
      >
        {/* {load ? (
          <Typography
            sx={{
              m: "10px",
            }}
            variant="h4"
          >
            Books
          </Typography>
        ) : (
          <h1>hello world</h1>
        )} */}

        <Grid container spacing={2}>
          {bookList ? (
            bookList.map((book) => (
              <Grid item xs={3}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      {book.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {book.language}
                    </Typography>
                    <Typography variant="body2">
                      {book.description}
                      <br />"{book.condition}"
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <h1>Loading Book ......</h1>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Stats;
