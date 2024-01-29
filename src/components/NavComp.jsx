import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

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
  return (
    <Box>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Image src="../src/assets/informasi/Logo.png" boxSize="50px" mr={3} />
          <Navbar.Brand href="/" className="navbarBrand fs-3 fw-bold">
            TK Islam Al-Manaar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center menu">
              <Button>
                <a href="/">Beranda</a>
              </Button>
              <Button>
                <a href="/Informasi">Informasi</a>
              </Button>
              <Button>
                <a href="/Program">Program</a>
              </Button>
              <Button>
                <a href="/Pesdik">Peserta Didik</a>
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
                    href="/Sekolah"
                    py={4}
                  >
                    Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/Kepsek" py={4}>
                    Kepala Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/Guru" py={4}>
                    Guru
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button as={Button} href="/Kontak">
                <a href="/Kontak">Kontak</a>
              </Button>
            </Nav>

            {/* <Box className="text-center">
              <Button
                className="btn btn-danger fw-bold rounded-1"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Box>
  );
};

export default NavbarComp;
