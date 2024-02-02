import { useEffect, useState } from "react";

const TimeDifferent = ({ date }) => {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const receivedDate = new Date(date);
      const currentTime = new Date();
      const differenceInMilliseconds = currentTime - receivedDate;

      if (differenceInMilliseconds < 86400000) {
        // Weniger als 24 Stunden
        setTimeDifference(
          `${Math.floor(differenceInMilliseconds / 3600000)} hours`
        );
      } else if (differenceInMilliseconds < 604800000) {
        // Mehr als 24 Stunden und weniger als eine Woche
        setTimeDifference(
          `${Math.floor(differenceInMilliseconds / 86400000)} days`
        );
      } else if (differenceInMilliseconds < 2592000000) {
        // Mehr als eine Woche und weniger als ein Monat
        setTimeDifference(
          `${Math.floor(differenceInMilliseconds / 604800000)} weeks`
        );
      } else if (differenceInMilliseconds < 31536000000) {
        // Mehr als ein Monat und weniger als ein Jahr
        setTimeDifference(
          `${Math.floor(differenceInMilliseconds / 2592000000)} months`
        );
      } else {
        // Mehr als ein Jahr
        setTimeDifference(
          `${Math.floor(differenceInMilliseconds / 31536000000)} years`
        );
      }
    };
    calculateTimeDifference();
  }, []);

  return <div>{timeDifference !== null && <p>{timeDifference}</p>}</div>;
};
export default TimeDifferent;
