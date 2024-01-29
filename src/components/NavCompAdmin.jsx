import axios from "axios";

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:2024/Logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/LoginAdm");
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Image src="../src/assets/informasi/Logo.png" boxSize="50px" mr={3} />
          <Navbar.Brand href="/BerandaAdm" className="navbarBrand fs-3 fw-bold">
            TK Islam Al-Manaar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center menu">
              <Button>
                <a href="/BerandaAdm">Beranda</a>
              </Button>
              <Button>
                <a href="/InformasiAdm">Informasi</a>
              </Button>
              <Button>
                <a href="/ProgramAdm">Program</a>
              </Button>
              <Button>
                <a href="/PesdikAdm">Peserta Didik</a>
              </Button>
              <Menu bg="none">
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  className="menu-tentang"
                >
                  Tentang
                </MenuButton>
                <MenuList className="listmenu">
                  <MenuItem
                    className="text-center"
                    as="a"
                    href="/SekolahAdm"
                    py={4}
                  >
                    Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/KepsekAdm" py={4}>
                    Kepala Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/GuruAdm" py={4}>
                    Guru
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button as={Button}>
                <a href="/KontakAdm">Kontak</a>
              </Button>
            </Nav>

            <Box className="text-center pengaturan">
              <Button
                size="md"
                // backgroundColor="red.600"
                color="white"
                className="keluar fw-bold rounded-1 "
                onClick={handleLogout}
              >
                <ArrowRightIcon boxSize={4} pr={1} />
                Logout
              </Button>
            </Box>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Box>
  );
};

export default NavbarComp;
