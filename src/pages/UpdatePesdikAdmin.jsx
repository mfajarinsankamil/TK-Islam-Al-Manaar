import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  FormLabel,
  Text,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdatePesdikAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    nama: "",
    nisn: "",
    tgl_lahir: "",
    jenis_kelamin: "",
    kelas: "",
    alamat: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:2024/UpdatePesdikAdmin/" + id, values)
      .then((res) => navigate("/PesdikAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:2024/GetRecordPesdikAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          nama: res.data[0].nama,
          nisn: res.data[0].nisn,
          tgl_lahir: res.data[0].tgl_lahir,
          jenis_kelamin: res.data[0].jenis_kelamin,
          kelas: res.data[0].kelas,
          alamat: res.data[0].alamat,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updatePesdikAdmin-page">
        <Box className="updatePesdikAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-4 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Peserta Didik
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box className="mb-3 mt-3">
                      <FormLabel htmlFor="nama" className="form-label">
                        Nama :
                      </FormLabel>
                      <Input
                        type="nama"
                        className="form-control"
                        id="nama"
                        placeholder="Masukkan Nama"
                        name="nama"
                        value={values.nama}
                        onChange={(e) =>
                          setValues({ ...values, nama: e.target.value })
                        }
                      ></Input>
                    </Box>

                    <Box className="mb-3">
                      <FormLabel htmlFor="nisn" className="form-label">
                        NISN :
                      </FormLabel>
                      <Input
                        type="nisn"
                        className="form-control"
                        id="nisn"
                        placeholder="Masukkan NISN"
                        name="nisn"
                        value={values.nisn}
                        onChange={(e) =>
                          setValues({ ...values, nisn: e.target.value })
                        }
                      ></Input>
                    </Box>

                    <Box className="mb-3">
                      <FormLabel htmlFor="tgl_lahir" className="form-label">
                        Tanggal Lahir :
                      </FormLabel>
                      <Input
                        type="date"
                        className="form-control"
                        id="tgl_lahir"
                        placeholder="Masukkan Tanggal Lahir"
                        name="tgl_lahir"
                        value={values.tgl_lahir}
                        onChange={(e) =>
                          setValues({ ...values, tgl_lahir: e.target.value })
                        }
                      ></Input>
                    </Box>

                    <Box className="mb-3">
                      <FormLabel htmlFor="jenis_kelamin" className="form-label">
                        Jenis Kelamin :
                      </FormLabel>
                      <Select
                        type="jenis_kelamin"
                        placeholder="Pilih Jenis Kelamin"
                        className="form-control"
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        value={values.jenis_kelamin}
                        onChange={(e) =>
                          setValues({
                            ...values,
                            jenis_kelamin: e.target.value,
                          })
                        }
                      >
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </Select>
                    </Box>

                    <Box className="mb-3">
                      <FormLabel htmlFor="kelas" className="form-label">
                        Kelas :
                      </FormLabel>
                      <Select
                        type="kelas"
                        placeholder="Pilih Kelas"
                        className="form-control"
                        id="kelas"
                        name="kelas"
                        value={values.kelas}
                        onChange={(e) =>
                          setValues({ ...values, kelas: e.target.value })
                        }
                      >
                        <option>Kelas A</option>
                        <option>Kelas B</option>
                      </Select>
                    </Box>

                    <Box className="mb-3">
                      <FormLabel htmlFor="alamat" className="form-label">
                        Alamat :
                      </FormLabel>
                      <Textarea
                        type="alamat"
                        placeholder="Masukkan Alamat"
                        className="form-control"
                        id="alamat"
                        name="alamat"
                        value={values.alamat}
                        onChange={(e) =>
                          setValues({ ...values, alamat: e.target.value })
                        }
                      ></Textarea>
                    </Box>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
};

export default UpdatePesdikAdmin;
