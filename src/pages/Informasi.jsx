import axios from "axios";

import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FooterComp from "../components/FooterComp";
import NavComp from "../components/NavComp";

const Informasi = () => {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2024/Informations")
      .then((res) => setInformations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavComp />
      <Box className="informasi-page pt-5">
        <Box className="informasi min-vh-100 pt-5 mb-0">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text
                  as="h1"
                  className="fw-bold text-center animate__animated animate__fadeInUp animated__delay-1s"
                >
                  Informasi
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                {informations.length !== 0 ? (
                  <Box>
                    {informations.map((informasi) => (
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        key={informasi.id}
                      >
                        <Image
                          className="image-informasi"
                          objectFit="cover"
                          boxSize="150px"
                          src="../src/assets/informasi/informasi.png"
                        />

                        <Stack key={informasi.id}>
                          <CardBody>
                            <Heading size="md">{informasi.judul}</Heading>
                            <Text as="p">Assalamualaikum wr.wb</Text>
                            <Text as="p" py="2">
                              {informasi.keterangan}
                            </Text>
                            <Text as="p">Wassalamualaikum wr.wb</Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    ))}
                  </Box>
                ) : (
                  <h2>No Records</h2>
                )}
              </Col>
            </Row>
            <FooterComp />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

// {
/* <div className="container mt-5">
        {/* <Link to="/CreateInfromasiAdmin" className="btn btn-success">
          Create Informasi
        </Link> */
// }
// {
/* {informations.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Judul</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Gambar</th>
                {/* <th scope="col">Action</th> */
// }
// {
/* </tr>
            </thead>
            <tbody>
              {informations.map((informasi) => (
                <tr key={informasi.id}>
                  <td>{informasi.judul}</td>
                  <td>{informasi.keterangan}</td>
                  <td>{informasi.gambar}</td> */
// }
// {
/* <td> */
// }
// {
/* <Link
                      to={`/UpdateInformasiAdmin/${informasi.id}`}
                      className="btn btn-info btn-sm me-2"
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(informasi.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button> */
// }
// {
/* </td> */
// }
// {
/* </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No Records</h2>
        )}
      // </div> */
// }

export default Informasi;
