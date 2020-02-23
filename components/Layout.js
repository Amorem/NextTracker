import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        {children}
      </main>
    </div>
  );
};

export default Layout;
