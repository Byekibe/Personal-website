import HeroImg  from '../assets/my-hero.jpg';
import ProfileImg from '../assets/profile.jpg';
 
const Profile = () => {
    return (
        <div className='my-5'>
        {/* <div className='my-5 d-flex justify-content-center'>
            <img className='custom-img ' src={ProfileImg} alt="" />
        </div> */}
        <figure className="figure w-100 d-flex flex-column justify-content-center">
            <img className='custom-img mx-auto d-block' src={ProfileImg} alt="Peter's profile" />
            <figcaption className="figure-caption mx-auto mt-2">I only have this in my gallery.</figcaption>
        </figure>  
        </div>
    );
};

export default Profile;