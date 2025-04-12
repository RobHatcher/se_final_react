import "./About.css";
import img from "../../assets/aboutme.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img src={img} alt="Author IMG" className="about__image" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Robert Hatcher. I am a High school history teacher and
          soccer coach. I also have run my own destination wedding videography
          business since 2015, with my wife. We have traveled to many different
          countries including Italy, Switzerland, Iceland, and Portugal.
        </p>
        <p className="about__text">
          I started my journey to learning Software Engineering because I am
          always looking for ways to challange myself. I challenge myself to do
          hard things, to open doors to other oppotunities in my life. This
          keeps me from having a stagnant life by giving myself the option to
          always find a way to have upward mobility.
        </p>
        <p className="about__text">
          I started TripleTen in March of 2024. Balancing all other facets of my
          life, I dedicated the time I had and made it a priority to learn
          frontend tools such as HTML and CSS, JavaScipt, and React. Also
          learning backend tools like Node, Express, Mongo, Postman, and
          deploying a server from the cloud. I have enjoyed my time learning all
          of these new skills and am excited to see where these skills will lead
          me.
        </p>
      </div>
    </div>
  );
}

export default About;
