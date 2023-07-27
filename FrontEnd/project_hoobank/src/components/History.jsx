import styles from "../style";
import axios from "axios";
import HistoryCard from "./HistoryCard" ;
import {React , useState , useEffect }from "react";

const History = () => {
    
  axios.get("http://localhost:9999/api/duebills/history/all")
  .then((response) => { 
    sessionStorage.setItem('history', JSON.stringify(response.data) );
    // console.log(sessionStorage.getItem('values'));
    // console.log(response.data) ;
  })
  .catch((error) => {
    console.log(error) ;
    // return ;
  }) ;

  const temp = sessionStorage.getItem('history') ;
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
        History <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      { JSON.parse(temp).map((card) => <HistoryCard key={card.id} description={ card.description } paydate={card.paydate}  amount={card.amount}  customer_id={1} type={card.type} />)}
    </div>
  </section>
);
}

export default History;
