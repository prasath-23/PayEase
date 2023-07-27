import {React , useState }from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import axios from "axios";
// import Change from "./Bills"


// const CustomTextField = styled(TextField)({
//   color: 'gray'
// })
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  border: '2px outset #A1EDF0',
  "border-radius" : "7px" ,
  // border-style : "" ,
  boxShadow: 24,
  // background: "rgba(119,207,242,0.95)",
  background: "rgb(24,20,36)",
  p: 4,
  // opacity : 0.7
};

const Click = ({ styles }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState();
  const [ dueDate , setDueDate ] = useState(dayjs().format('DD/MM/YYYY').toString()) ;
  const [description, setDescription] = useState("");
  const [age, setAge] = useState('');
  const [type , setType] = useState('') ;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBodyChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value) ;
    // setDueDate(e);
  };

  const handleClick = () => {
    // console.log( {amount,dueDate,description }) ;
    const data = 
    {
      amount : amount ,
      duedate : dueDate,
      description : description ,
      customer_id : 1 ,
    }
    axios.post("http://localhost:9999/api/duebills/add" , data )
  .then((response) => { 
    // sessionStorage.setItem('values', JSON.stringify(response.data) );
    // console.log(sessionStorage.getItem('values'));
    console.log(response.data) ;
    // sessionStorage.setItem('values', JSON.stringify(response.data) );    
  })
  .catch((error) => {
    console.log(error) ;
    // return ;
  }) ;
    console.log(data) ;
    window.location.reload();
    // onPostButtonClick();
    // change() ;
    handleClose() ;
  };

  return(  
  <div>
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={handleOpen}>
    Add Bill ₹
  </button>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  style ={{ background: "linear-gradient(120deg, rgba(28,25,28,1) 35%, rgba(65,65,71,1) 100%)" }} >
        <form onSubmit={handleClick}> 
         <div className="add-post" style={{display:"flex", justifyContent: "center", flexDirection: "column" }}>
      <center><h1>Add Bill</h1></center>

      <div>
        <TextField
          label="Amount"
          type="Number"
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
          fullWidth
          required
          // className={ amount ? 'text-gradient' : ''}
          // sx={{ input : { color: "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)"  } }}
          // sx = {{ input : {className  : "bg-blue-gradient" }} }
          // sx={{ input: { color: " radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%) " } , border: 'white' }}
          margin="normal"
          // color="red"
          style={{
            marginLeft: 1,
            // border : "red" ,
            width: 320,
            borderColor : "red" ,
            // border: '#A1EDF0' ,
            // "margin-color" : "red" ,
            // textDecorationColor
          }}
        />
      </div>
      <div>
      <TextField
      type="date"
      label="Date"
      // placeholder=""
      value={dueDate}
      onChange={handleDateChange}
      // InputLabelProps={{
      //   shrink: true,
      // }}
      variant="outlined"
      fullWidth
      required
      // className={ amount ? 'text-gradient' : ''}
      // sx={{ input : { color: "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)"  } }}
      // sx = {{ input : {className  : "bg-blue-gradient" }} }
      // sx={{ input: { color: " radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%) " } , border: 'white' }}
      margin="normal"
      // color="red"
      style={{
        marginLeft: 1,
        // border : "red" ,
        width: 320,
        // borderColor : "red" ,
        // border: '#A1EDF0' ,
        // "margin-color" : "red" ,
        // textDecorationColor
      }}
    />
      </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          // id="demo-simple-select-autowidth"
          fullWidth
          value={type}
          // onChange={}
          label="Age"
          style={{width:320}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Mobile Recharge</MenuItem>
          <MenuItem value={21}>DTH Recharge</MenuItem>
          <MenuItem value={22}>Gas Bill</MenuItem>
        </Select>
      </FormControl>
    </div>

      <div>
        <TextField
          label="Description"
          value={description}
          onChange={handleBodyChange}
          variant="outlined"
          fullWidth
          required
          margin="normal"
          multiline
          rows={8}
          style={{ marginLeft: 1, width: 320 }}
        />
      </div>
        <div>
        <button className="py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" type="submit" >
          Post
        </button>
      </div>
    </div>
    </form>
        </Box>
      </Modal>
    </div>

);
}
export default Click;
