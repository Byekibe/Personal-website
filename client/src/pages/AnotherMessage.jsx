import { Link } from "react-router-dom";

const AnotherMessage = () => {
    return (
        <>
            <h2>Want to send another message? <Link to="/contacts">Yes</Link> <Link to="/">Go home</Link></h2> 
        </>
    );
};

export default AnotherMessage;