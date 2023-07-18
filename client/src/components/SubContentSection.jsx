import { Link } from "react-router-dom";
import { TbArrowBack } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';

const SubContentSection = () => {
    return (
        <>
            <p className="fs-4 text-center fw-lighter lh-lg">
                You can always find me on <Link target='_blank' to="https://twitter.com/kibetpete">twitter</Link> where I ask and tell tech stories in a subtle yet concise way.
            </p>
            <p className="fs-4 text-center fw-lighter lh-lg">
                I do follow back <Link target='_blank' to="https://twitter.com/kibetpete"><TbArrowBack /></Link>. Got feedback...? <Link to="/contacts"><VscFeedback /></Link>
            </p>
            <p className="fs-4 text-center fw-lighter lh-lg">
                Made with love ❤️ by Pierre.
            </p>
        </>
    );
};

export default SubContentSection;