const QuoteSection = ({ quote, isFetched, isProcessing, isFailed, isClicked }) => {
  let timeoutId = null;
  
  function copyQuote(){
    isFetched &&
    navigator.clipboard.writeText(quote.quote + "\n- " + quote.author);
  }

  function showCopiedMessage(){
    if(isFetched){
      const copiedElement = document.body.querySelector('.copied');
      
      copiedElement.classList.add('copied-show');

      timeoutId && clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        copiedElement.classList.remove('copied-show')
      }, 1000);
    }
  }
  
  return ( 
    <div className="quote-section">
      { !isFetched && !isClicked && <p>Click 'Generate' to generate a random quote.</p>}
      { isProcessing && <p>Hang tight...</p> }
      { isFailed && <p>An error occurred!</p> }
      { isFetched && <p> { quote.quote } <br /> <br /> {"-  " + quote.author } </p> }
      <i className="material-symbols-outlined" onClick={ () => { copyQuote(); showCopiedMessage(); }}>content_copy</i>
      <span className="tooltip">Copy</span>
      <span className="copied">Copied</span>
    </div>
  );
}
 
export default QuoteSection;