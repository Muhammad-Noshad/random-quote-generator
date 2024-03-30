import QuoteSection from "./QuoteSection";

const MainBody = () => {
  return ( 
    <div className="main-body">
      <p className="title">
        RandQuoto
      </p>
      <QuoteSection />
      <button className="generate-btn">Generate</button>
    </div>
  );
}
 
export default MainBody;