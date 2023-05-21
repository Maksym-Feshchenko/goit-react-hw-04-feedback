import React from "react";
import css from "./Statistics.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <p className={css.statisticsHeading}>Feedback Statistics</p>
      <p className={`${css.statisticsItem} ${css.positiveFeedback}`}>Good: {good}</p>
      <p className={`${css.statisticsItem} ${css.neutralFeedback}`}>Neutral: {neutral}</p>
      <p className={`${css.statisticsItem} ${css.negativeFeedback}`}>Bad: {bad}</p>
      <p className={`${css.statisticsItem} ${css.totalFeedback}`}>Total: {total}</p>
      <p className={`${css.statisticsItem} ${css.positiveFeedback}`}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistic;
