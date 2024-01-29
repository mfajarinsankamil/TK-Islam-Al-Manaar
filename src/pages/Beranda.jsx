// import axios from "axios";

// import { useEffect, useState } from "react";
// import NavCompAdmin from "../components/NavCompAdmin";
import {
  Box,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Card,
  Image,
  CardBody,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { proGul } from "../data/dataindex";

import NavbarComp from "../components/NavComp";
import FooterComp from "../components/FooterComp";
import FaqComp from "../components/FaqComp";
// import FooterCompAdmin from "../components/FooterCompAdmin";

// import NavComp from "../components/NavComp";

function Beranda() {
  let navigate = useNavigate();
  // const [auth, setAuth] = useState(false);
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  // axios.defaults.withCredentials = true;
  //   useEffect() => {
  //     axios.get("http://localhost:2024/BerandaAdmin")
  //     .then((res) => setBeranda(res.data))
  //     .catch((err) => console.log(err));
  //   }
  // }

  //     axios
  //     .get("http://localhost:2024/PesdikAdmin")
  //     .then((res) => setStudents(res.data))
  //     .catch((err) => console.log(err));
  // if (res.data.Status === "Success") {
  //   setAuth(true);
  //   setName(res.data.name);
  // } else {
  //   setAuth(false);
  //   setMessage(res.data.Message);
  // }
  //   });
  // }, []);

  // const handleLogout = () => {
  //   axios
  //     .get("http://localhost:2024/Logout")
  //     .then((res) => {
  //       if (res.data.Status === "Success") {
  //         location.reload(true);
  //       } else {
  //         alert("error");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <NavbarComp />

      <Box>
        <Heading
          as="header"
          className="w-100 min-vh-100 d-flex align-items-center overflow-hidden"
        >
          <Container>
            <Row className="box-header d-flex align-items-center pt-lg-5">
              <Col lg="6">
                <Text
                  as="h1"
                  className="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                >
                  Mari Bergabung <br /> <span>Di Taman Kanak-Kanak </span>{" "}
                  <br /> Islam Al-Manaar
                </Text>
                <Text
                  fontSize="md"
                  className="mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                >
                  TK Islam Al-Manaar adalah rumah kedua bagi setiap anak. Dengan
                  lingkungan yang ramah anak, kami menciptakan suasana di mana
                  setiap anak merasa aman, senang, dan siap untuk belajar.
                </Text>
                <ButtonGroup colorScheme="red">
                  <Button
                    className="btn me-2 animate__animated animate__fadeInUp animate__delay-1s"
                    onClick={() => navigate("/Informasi")}
                  >
                    Lihat Informasi
                  </Button>
                  {/* <Button className="btn mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                  Lihat Promo
                </Button> */}
                </ButtonGroup>
              </Col>
              {/* <Col lg="6" className="pt-lg-0 pt-5">
              <Image
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col> */}
            </Row>
          </Container>
        </Heading>
      </Box>

      <Box className="program-page pt-3">
        <Box className="program-unggulan min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program Unggulan
                </Text>
              </Col>
            </Row>

            <Row>
              {proGul.map((pg) => {
                return (
                  <Col key={pg.id} className="shadow rounded">
                    <Card>
                      <Image
                        src={pg.image}
                        className="img mb-3 rounded-top"
                        // boxSize="150px"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {pg.judul}
                        </Heading>

                        <Text as="p" py="1" px="1">
                          {pg.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Box>
        {/* <Divider /> */}
      </Box>

      <FaqComp />
      <FooterComp />
    </div>
  );
}

export default Beranda;
