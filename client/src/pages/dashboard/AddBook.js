import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { BookService } from "../../service/BookService";

const AddJob = () => {
  const onBookSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let bookObj = {
      name: data.get("bookName"),
      language: data.get("bookLanguage"),
      description: data.get("Bookdescription"),
      type: data.get("bookType"),
      cost: data.get("bookCost"),
      offer: data.get("bookOffer"),
      author: data.get("author"),
      delivery_date: data.get("bookDeliveryDate"),
      rating: data.get("bookRating"),
      condition: data.get("bookCondition"),
      page: data.get("pages"),
    };
    try {
      let response = await BookService.CreateBook(bookObj);
      console.log(response);
      console.log(response.data);
      console.log(response.data.data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      {/* <form className="form"> */}
      <Box
        component="form"
        onSubmit={onBookSubmit}
        sx={{ flexGrow: 1, backgroundColor: "white", p: "20px" }}
      >
        <Typography
          sx={{
            m: "10px",
          }}
          variant="h4"
        >
          ADD JOB
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookName"
              name="bookName"
              label="Book Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookLanguage"
              name="bookLanguage"
              label="Language"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="Bookdescription"
              name="Bookdescription"
              label="description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookType"
              name="bookType"
              label="Type"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookCost"
              name="bookCost"
              label="Cost"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookOffer"
              name="bookOffer"
              label="Offer"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="author"
              name="author"
              label="Author"
              variant="outlined"
            />
          </Grid>
          {/* <Grid item xs={2}>
            <TextField
              size="small"
              id=""
              name=""
              label=""
              variant="outlined"
            />
          </Grid> */}
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookDeliveryDate"
              name="bookDeliveryDate"
              label="Delivery Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookRating"
              name="bookRating"
              label="Rating"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="bookCondition"
              name="bookCondition"
              label="Condition"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="pages"
              name="pages"
              label="Number of Pages"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            m: "10px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#2BC1CB",
              // color: "#2BC1CB",
            }}
            variant="contained"
            type="submit"
          >
            Add Book
          </Button>
        </Box>
      </Box>
      {/* </form> */}
    </div>
  );
};

export default AddJob;
