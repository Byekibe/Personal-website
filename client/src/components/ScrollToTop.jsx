import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <div className="my-pos d-flex" onClick={ () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }>
            <h3 className="my-font">
                Top
            </h3>
        </div>
    );
};

export default ScrollToTop;