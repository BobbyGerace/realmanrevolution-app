import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>{children}</main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
};

export default Layout;
