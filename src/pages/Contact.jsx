import React,  {useEffect} from "react";
import Main from "../sections/Contact/Main";

const Contact = () => {

    useEffect(() => {
      document.title =
        "Contact Us | Rosy Garden - Where Fresh Blooms Speak the Language of Your Heart";
    }, []);


  return (
      <>
        <div>
            <Main/>
        </div>
      </>
  );
};

export default Contact;
