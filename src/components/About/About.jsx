import "./About.css";
import img from "../../assets/aboutme.jpg";

function About() {
    return (
        <div className="about">
            <div className="about__image-container">
                <img 
                    src={img} 
                    alt="Author IMG"
                    className="about__image"
                />
            </div>
            <div className="about__content">
                <h2 className="about__title">About the author</h2>
                <p className="about__text">
                    This block describes the project author. Here you should indicate your name, 
                    what you do, and which technologies you know. You can also talk about 
                    your experience with Practicum, what you learned there, and how you can 
                    help potential customers.
                </p>
            </div>
        </div>
    );
}

export default About;