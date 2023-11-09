import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from 'react-icons/bs';

const MainContent = () => {
    return (
        <div className="">
            <h1 className="my-4 text-center font-poppins">Hi! I'm Peter</h1>
            <div className="fs-4 text-center fw-lighter lh-lg">
                <p className="lead font-monospace">I am a software dev. <Link to="/about"><BsBoxArrowUpRight /></Link></p>
                <p className="fs-4 lh-lg fw-lighter">You can call me Pierre if you like, yes I love 🤩 🤩 it but won't say. </p>
                <p className="fs-4 lh-lg fw-lighter">Just before you can ask about my hobbies, I love travelling and photography, only that I do it less often.</p>
                <p className="fs-4 lh-lg fw-lighter">Tease me about love letters and I'll <Link to="/contacts">send</Link> you one. Haha I was only joking.</p>
                <p className="fs-4 lh-lg fw-lighter">Occasionally, on weekends I watch Arsenal play tiki taka, or test my harmstring: I mean bike rides.</p>
            </div>
        </div>
    );
};


export default MainContent;
