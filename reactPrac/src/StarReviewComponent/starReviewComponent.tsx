import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import "./starReviewComponentStyle.css";
enum StarColor{
    GREY='grey',
    GOLD='gold'
}
export function StarReview() {
  const [totalReview, setTotalReview] = React.useState(0);
  const [starColorData, setStarColorData] = React.useState([
    StarColor.GREY,
    StarColor.GREY,
    StarColor.GREY,
    StarColor.GREY,
    StarColor.GREY,
  ]);
  function handleStarClick(index) {
    setTotalReview(0);
    let updatedStar = [...starColorData];
    updatedStar[index] = starColorData[index] == StarColor.GREY ? StarColor.GOLD : StarColor.GREY;
    setStarColorData(updatedStar);
  }
  function handleSubmit() {
    let starCount = 0;
    for (let i = 0; i < starColorData.length; i++) {
      if (starColorData[i] == StarColor.GOLD) {
        starCount++;
      }
      setTotalReview(starCount);
    }
  }
  return (
    <div className={"starReviewContainer"}>
      <div className={"starDiv"}>
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <span className={"stars"} key={index}>
              <TiStarFullOutline
                onClick={() => handleStarClick(index)}
                size={30}
                color={`${starColorData[index]}`}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
