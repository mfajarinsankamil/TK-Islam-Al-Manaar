import {
  Box,
  Text,
  Card,
  Image,
  CardBody,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { proGul, proLin, proSkul } from "../data/dataindex";

import FooterCompAdmin from "../components/FooterCompAdmin";
import NavbarCompAdmin from "../components/NavCompAdmin";

const ProgramAdmin = () => {
  return (
    <div>
      <NavbarCompAdmin />
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

        <Box className="program-ekskul min-vh-100 pt-2">
          <Container>
            <Row className="pb-5 mb-5 pt-3 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program Ekstrakulikuler
                </Text>
              </Col>
            </Row>

            <Row>
              {proSkul.map((ps) => {
                return (
                  <Col key={ps.id} className="shadow rounded">
                    <Card>
                      <Image
                        src={ps.image}
                        className="img mb-3 rounded-top"
                        // boxSize="150px"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {ps.judul}
                        </Heading>
                        <Text as="p" py="1" px="1">
                          {ps.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Box>

        <Box className="program-lainnya min-vh-100 pt-2">
          <Container>
            <Row className="pb-5 mb-5 pt-3 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program lainnya
                </Text>
              </Col>
            </Row>

            <Row>
              {proLin.map((pl) => {
                return (
                  <Col key={pl.id} className="shadow rounded">
                    <Card>
                      <Image
                        src={pl.image}
                        className="img mb-3 rounded-top"
                        // boxSize="150px"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {pl.judul}
                        </Heading>
                        <Text as="p" py="1" px="1">
                          {pl.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Divider />
            <FooterCompAdmin />
          </Container>
        </Box>
      </Box>
      <FooterCompAdmin />
    </div>
  );
};

export default ProgramAdmin;
