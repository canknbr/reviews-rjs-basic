import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const handleRandom = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const { name, job, image, text } = people[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrev}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        <button className="btn btn-block" onClick={handleRandom}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
