import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import axios from "axios";
import {React , useState , useEffect }from "react";

// export function Change() {
//   Bills() ;
//   console.log("Bills") ;
// }

const Bills = () => {

  axios.get("http://localhost:9999/api/duebills/show")
  .then((response) => { 
    sessionStorage.setItem('values', JSON.stringify(response.data) );
    // console.log(sessionStorage.getItem('values'));
    // console.log(response.data);
  })
  .catch((error) => {
    console.log(error) ;
    // return ;
  }) ;

  const temp = sessionStorage.getItem('values') ;
  console.log(JSON.parse(temp)) ;

  if( JSON.parse(temp) == null )
  {
    console.log(temp) ;
    return ;
  }
  // const [change, setChange] = useState(false);
  // const [bill,setBill]=useState();
  



  // const fetchData = () => {
    // axios
    //   .get("http://localhost:9999/show")
    //   .then((response) => {
    //     setBill(response.data.bill_id);
    //     sessionStorage.setItem("values", JSON.stringify(response.data));
    //     setPostList(JSON.parse(sessionStorage.getItem("values")));
        
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  // };

  return (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Pending Bills <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      { JSON.parse(temp).map((card) => <FeedbackCard key={card.id} description={ card.description } duedate={card.duedate}  amount={card.amount}  customer_id={1} id={card.bill_id} />)}
    </div>
  </section>
);
}

export default Bills;
// export default setChange ;