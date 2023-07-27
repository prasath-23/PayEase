import { quotes } from "../assets";
import dayjs from 'dayjs';
import axios from "axios";

const deleteId = ( id ) => {
  axios
    .delete(`http://localhost:9999/api/duebills/delete/${id}`)
    .then((response) => {
      console.log(response) ;
    })
    .catch((error) => {
      console.log(error) ;
      // return ;
    });
}


const FeedbackCard = ({ id ,description, amount, duedate , customer_id}) => {


  const loadscript = (src) => {
        
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src;
      
      script.onload = () => {
        resolve(true);
      }
      
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
      
    })
  }
  
  
  const handlePayment = async (am,e) => {

    e.preventDefault();
    
    // if (!fname || !lname || !email || !roomType || !ng || !ad || !df) {
    //   alert("Please fill in all required fields before proceeding to payment.");
    //   return;
    // }
    const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
    
  if(!res)
  {
    alert("You are offline..Failed to load Razorpay")
    return
  }
  // else
  // {
  //   // console.log( "res : "+ res) ;
  // }
  const options = {
    key:"rzp_test_V2vuy5GVn3WxlX",
    currency : "INR",
    amount:am*100,
    name : "Bill",
    description :"thanks for booking",
    // image : ""
    handler :  async function(response){
      console.log(response)
      if( response.razorpay_payment_id != null )
      {
        handleClick() ;
      }
      // alert(response.razorpay_payment_id)
    },
    
    prefill : {
      // name : "Subiksha"
    }
    
  };
  
  
  const paymentObject = new  window.Razorpay(options);
  paymentObject.open();
 
  // window.location.reload();
  }

  const handleClick = () => {
    const data = {
      paydate: dayjs().format('DD-MM-YYYY') ,
      description: description ,
      amount: amount ,
      type: "Bill" ,
      customer_id: customer_id,
    }
    console.log(data) ;
    axios
      .post("http://localhost:9999/api/duebills/history/add",data)
      .then((response) => {
        // setBill(response.data.bill_id);
        console.log(response) ;
        // sessionStorage.setItem("history", JSON.stringify(response.data));
        // setPostList(JSON.parse(sessionStorage.getItem("history")));
        deleteId(id) ;
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return(
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
  <div className="flex flex-row" >
  <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> 
  <p className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">&nbsp;&nbsp;&nbsp;Hello</p>
  </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {description}
      </p>

    <div className="flex flex-row" >
      <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"  onClick={(e)=>{handlePayment(amount, e)}}>pay</button>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {amount}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        {duedate}
        </p>
      </div>
    </div>
  </div>
);
}


export default FeedbackCard ;