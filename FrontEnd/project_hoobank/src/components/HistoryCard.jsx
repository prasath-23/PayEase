import { quotes } from "../assets";


const HistoryCard = ({ description, amount, paydate , type }) => {
  
    return(
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className="flex flex-row" >
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> 
        <p className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">&nbsp;&nbsp;&nbsp;{type}</p>
        </div>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            {description}
          </p>
      
          <div className="flex flex-row" >
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                {amount}
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {paydate}
              </p>
            </div>
          </div>
        </div>
      );
}

export default HistoryCard ;