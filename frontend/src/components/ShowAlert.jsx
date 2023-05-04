// import { useEffect } from "react";

const Alert = ({ alertText, setAlertMessage }) => {
  setTimeout(() => setAlertMessage(false), 3000);

  return <div className='alert'>{<> {alertText} </>}</div>;
};

export default Alert;
