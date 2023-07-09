import HeroImg  from '../assets/my-hero.jpg';
import ProfileImg from '../assets/profile.jpg';
 
const Profile = () => {
    return (
        <div className='my-5 d-flex justify-content-center'>
            <img className='custom-img ' src={ProfileImg} alt="" />
        </div>
    );
};

export default Profile;