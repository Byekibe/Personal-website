import HeroImg  from '../assets/code-img.jpg';
 
const HeroSection = () => {
    return (
        <div className='my-5 d-flex justify-content-center custom-height'>
            <img className='img-fluid custom-img-setting custom-img-fill' src={HeroImg} alt="" />
        </div>
    );
};

export default HeroSection;