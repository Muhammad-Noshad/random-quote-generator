import { useState } from "react";
import QuoteSection from "./QuoteSection";

const MainBody = () => {
  const [quote, setQuote] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [animation, setAnimation] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function getQuote(){
    setQuote("null");
    setIsProcessing(true);
    setAnimation("glow-animation");
    setIsFailed(false);
    setIsFetched(false);
    setIsClicked(true);

    let options = {
      method: 'GET',
      headers: { 'x-api-key': 'RilDBSInYEk65jdV8GgVCQ==QUrS7GOd9U3xHpyV' }
    }
    
    let url = 'https://api.api-ninjas.com/v1/quotes'
    
    
    fetch(url,options)
          .then(res => res.json())
          .then(data => {
            setQuote(data[0]);
            setIsFetched(true);
            setIsProcessing(false);
            setAnimation("");
          })
          .catch(err => {
              console.log(`error ${err}`);
              setIsFailed(true);
              setIsFetched(false);
              setIsProcessing(false);
              setAnimation("error-state");
          }); 
  }

  return ( 
    <div className={ "main-body" + " " + animation}>
      <p className="title">
        RandQuoto
      </p>
      <QuoteSection quote={ quote } isFetched = { isFetched } isProcessing={ isProcessing } isFailed={ isFailed } isClicked={ isClicked } />
      <button className="generate-btn" onClick={() => { getQuote(); }}>Generate</button>
    </div>
  );
}
 
export default MainBody;