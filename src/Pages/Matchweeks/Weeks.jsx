/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Logo from "../../components/LOGO";
import List from "../../components/List";
import WeeksObject from "../../assets/games_by_week.json";
import GoBack from "../../components/GoBackBtn";

const Weeks = () => {
  const matchweekLinks = new Array(38).fill("").map((_, index) => {
    console.log(index);
    return (
      <Link key={index} to={`/weeks/${index + 1}`}>
        Matchweek {index + 1}
      </Link>
    );
  });

  return (
    <>
      <Logo />
      <List items={matchweekLinks} />
      <GoBack />
    </>
  );
};
export default Weeks;
