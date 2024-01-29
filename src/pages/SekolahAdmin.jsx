import axios from "axios";

import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

import FooterCompAdmin from "../components/FooterCompAdmin";
import NavbarCompAdmin from "../components/NavCompAdmin";

const SekolahAdmin = () => {
  const [sekolahs, setSekolahs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2024/Sekolah")
      .then((res) => setSekolahs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [visis, setVisis] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2024/Visi")
      .then((res) => setVisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:2024/DeleteVisiAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };

  const [misis, setMisis] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2024/Misi")
      .then((res) => setMisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeletes = (id) => {
    axios
      .delete("http://localhost:2024/DeleteMisiAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };

  const [tujuans, setTujuans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2024/Tujuan")
      .then((res) => setTujuans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeletess = (id) => {
    axios
      .delete("http://localhost:2024/DeleteTujuanAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="sekolah-page pt-3">
        <Box className="sekolah min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tentang Sekolah - Admin
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab as="b">1. Profile</Tab>
                    <Tab as="b">2. Visi Misi & Tujuan</Tab>
                  </TabList>

                  <TabPanels>
                    {sekolahs.map((sekolah) => (
                      <TabPanel key={sekolah.id}>
                        <Box>
                          <Link
                            to={`/UpdateSekolahAdm/${sekolah.id}`}
                            className="btn btn-info btn-sm me-2"
                          >
                            <EditIcon boxSize={5} pr={1} />
                            Update Profile
                          </Link>
                        </Box>
                        {/* IDENTITAS SEKOLAH */}
                        <Box bg="teal" w="100%" p={2} color="white" my={5}>
                          Identitas Sekolah
                        </Box>
                        <Text pt={5}>
                          <b>NPSN </b> : {sekolah.npsn}
                        </Text>
                        <Text>
                          <b>Status </b> : {sekolah.status}
                        </Text>
                        <Text>
                          <b>Nama Sekolah </b> : {sekolah.nama_sekolah}
                        </Text>
                        <Text>
                          <b>Nama Yayasan </b> : {sekolah.nama_yayasan}
                        </Text>
                        <Text>
                          <b>SK Pendirian Sekolah </b> : {sekolah.skp_sekolah}
                        </Text>
                        <Text>
                          <b>Tanggal SK Pendirian</b> :{" "}
                          {sekolah.tgl_skp_sekolah}
                        </Text>
                        <Text>
                          <b>SK Izin Operasional </b> : {sekolah.ski_sekolah}
                        </Text>
                        <Text pb={5}>
                          <b>Tanggal SK izin Operasional </b> :{" "}
                          {sekolah.tgl_ski_sekolah}
                        </Text>

                        {/* DATA PELENGKAP */}
                        <Box bg="teal" w="100%" p={2} color="white" my={5}>
                          Data Pelengkap
                        </Box>
                        <Text pt={5}>
                          <b>Kebutuhan Khusus Dilayani </b> :{" "}
                          {sekolah.kbutuhan_khusus}
                        </Text>
                        <Text>
                          <b>Nama Bank </b> : {sekolah.nama_bank}
                        </Text>
                        <Text>
                          <b>Cabang KCP/Unit </b> : {sekolah.cbg_kcp_unit}
                        </Text>
                        <Text pb={5}>
                          <b>Rekening Atas Nama </b> :{" "}
                          {sekolah.rekening_atasnma}
                        </Text>

                        {/* DATA RINCI */}
                        <Box bg="teal" w="100%" p={2} color="white" my={5}>
                          Data Rinci
                        </Box>
                        <Text pt={5}>
                          <b>Status Bos</b> : {sekolah.status_bos}
                        </Text>
                        <Text>
                          <b>Sertifikat ISO </b> : {sekolah.sertifikat_iso}
                        </Text>
                        <Text>
                          <b>Sumber Listrik </b> : {sekolah.smbr_listrik}
                        </Text>
                        <Text>
                          <b>Daya Listrik</b> : {sekolah.daya_listrik}
                        </Text>
                        <Text pb={5} mb={5}>
                          <b>Kecepatan Internet</b> : {sekolah.kcp_internet}
                        </Text>
                      </TabPanel>
                    ))}

                    <TabPanel>
                      {/* VISI MISI */}
                      <Box bg="teal" w="100%" p={2} color="white" my={5}>
                        Visi dan Misi
                      </Box>

                      <Box>
                        <Text pt={5}>
                          <b>Visi : </b>
                        </Text>
                        <Link
                          to="/CreateVisiAdm"
                          className="btn btn-success mb-3"
                        >
                          <AddIcon boxSize={4} pr={1} />
                          Tambah Visi
                        </Link>

                        <Box pb={5}>
                          {visis.map((visi) => (
                            <Box key={visi.id}>
                              <Text>
                                {visi.no}. {visi.isi_ket}
                              </Text>
                              <Box pb={4}>
                                <Link
                                  to={`/UpdateVisiAdm/${visi.id}`}
                                  className="btn btn-info btn-sm me-2"
                                >
                                  <EditIcon boxSize={5} pr={1} />
                                  Update
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(visi.id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  <DeleteIcon boxSize={5} pr={1} />
                                  Delete
                                </button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      <Box>
                        <Text>
                          <b>Misi : </b>
                        </Text>
                        <Link
                          to="/CreateMisiAdm"
                          className="btn btn-success mb-3"
                        >
                          <AddIcon boxSize={4} pr={1} />
                          Tambah Misi
                        </Link>
                        <Box pb={5}>
                          {misis.map((misi) => (
                            <Box key={misi.id}>
                              <Text>
                                {misi.no}. {misi.isi_ket}
                              </Text>
                              <Box pb={4}>
                                <Link
                                  to={`/UpdateMisiAdm/${misi.id}`}
                                  className="btn btn-info btn-sm me-2"
                                >
                                  <EditIcon boxSize={5} pr={1} />
                                  Update
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDeletes(misi.id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  <DeleteIcon boxSize={5} pr={1} />
                                  Delete
                                </button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* TUJUAN */}
                      <Box bg="teal" w="100%" p={2} color="white" my={5}>
                        Tujuan
                      </Box>

                      <Box pt={5}>
                        <Text>
                          <b>Tujuan : </b>
                        </Text>
                        <Link
                          to="/CreateTujuanAdm"
                          className="btn btn-success mb-3"
                        >
                          <AddIcon boxSize={4} pr={1} />
                          Tambah Tujuan
                        </Link>
                        <Box pb={5} mb={5}>
                          {tujuans.map((tujuan) => (
                            <Box key={tujuan.id}>
                              <Text>
                                {tujuan.no}. {tujuan.isi_ket}
                              </Text>
                              <Box pb={4}>
                                <Link
                                  to={`/UpdateTujuanAdm/${tujuan.id}`}
                                  className="btn btn-info btn-sm me-2"
                                >
                                  <EditIcon boxSize={5} pr={1} />
                                  Update
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDeletess(tujuan.id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  <DeleteIcon boxSize={5} pr={1} />
                                  Delete
                                </button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
};

export default SekolahAdmin;
