import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import image from "../assets/img/photo-of-person-wearing-headphones-3916376.jpg";
import image1 from "../assets/img/purple-fireworks-effect-1190298.jpg";
// import image3 from "../assets/img/beard-man-holding-cassette-lying-on-blue-and-violet-linen-3756766.jpg";
import image2 from "../assets/img/women-taking-photo-2240763.jpg";
import image4 from "../assets/img/3402325.jpg";
import data from "../data.json";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

console.log(data);

const items = [
  {
    src: image,
    altText: "Slide 1",
    header: "CREATE GOOD MUSIC",
    key: "1",
  },
  {
    src: image1,
    altText: "Slide 2",
    header: "HIP TO THE HOP",
    key: "2",
  },
  {
    src: image2,
    altText: "Slide 3",
    header: "FEEL MUSIC",
    key: "3",
  },
];

const artist = data.artists.data.slice(0, 8);

const playlist = data.playlists.data.slice(0, 8);

const Banner = () => <UncontrolledCarousel items={items} />;

const Artist = () => {
  return artist.map((e, i) => {
    return (
      <Col key={i}>
        <Card>
          <CardImg top src={e.picture_xl} alt="..." />
          <CardBody>
            <Button color="primary" className="btn-round">
              <i className="now-ui-icons media-1_button-play"></i> {e.name}
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};

const Playlist = () => {
  return playlist.map((e, i) => {
    return (
      <Col key={i}>
        <Card>
          <CardImg top src={e.picture_xl} alt="..." />
        </Card>
      </Col>
    );
  });
};

const Footer = () => {
  return (
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright:
        <a href="https://twitter.com/bemijonathan"> @bemijonathan </a>
        <p>
          {" "}
          <a href="https://creative-tim.com"> Creative Tim </a>{" "}
        </p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <h2 className="title text-center mt-5"> Artists </h2>
        <Row xs="4">
          <Artist />
        </Row>
      </Container>
      <section className="__playlist py-3">
        <Container>
          <h2 className="title text-center my-5 text-white">
            Popular Playlist
          </h2>
          <Row>
            <Playlist />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row xs="2" className="my-5">
            <Col className="px-5">
              <Card style={{ position: "relative" }}>
                <div className="_streams a">
                  <h3>1000</h3>
                  <h6> Play List </h6>
                </div>
                <div className="_streams b">
                  <h3> 1000 + </h3>
                  <h6>artists</h6>
                </div>
                <img src={image4} alt="..." />
                <div className="_streams c">
                  <h3> 1,000, 000 </h3>
                  <h6>streams</h6>
                </div>
              </Card>
            </Col>
            <Col>
              <h3 className="title text-primary"> Listen To Awesome Music </h3>
              <p style={{ color: "rgba(93, 63, 251, 1)" }}>
                “Music gives a soul to the universe, wings to the mind, flight
                to the imagination and life to everything.”
              </p>
              <div className="__flex">
                <i className="now-ui-icons media-1_button-play icon-primary"></i>
                <h6> Play Good Music </h6>
              </div>
              <div className="__flex">
                <i className="now-ui-icons design_vector" color="primary"></i>
                <h6> Create Good Music </h6>
              </div>
              <div className="__flex">
                <i className="now-ui-icons media-2_note-03"> </i>
                <h6> Enormous Content </h6>
              </div>
              <Button color="primary" className="btn-round" size="lg">
                <i className="now-ui-icons media-2_sound-wave"> </i>
                Listen Now !!!
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
