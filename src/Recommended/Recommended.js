import Button from "../components/Button";
import "./Recommended.css";
// import pic from "./pic.jpg";
import pic from "../components/pic.jpg"

const Recommended = ({ handleClick }) => {
  return (
    <>
    <div>
      <div className="recommended-div">
        <div className="new">
        <h2 className="recommended-title">Recommended</h2>
        </div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          
        </div>
        <div className="d" >
          <img src={pic} alt="backgroung-pic" className="img"  />
          <h1 className="h" >Unleash Your Style, Unveil Endless Possibilities!</h1>
        </div>
      </div>
      </div>
    </>
  );
};

export default Recommended;
