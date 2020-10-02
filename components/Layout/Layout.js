import Head from 'next/head';

import Navbar from '../Navbar/Navbar';

const Layout = (props) => (
  <div className='container'>
    <Head>
      <title>Thimble</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Navbar />
    <main>{props.children}</main>
    {/* <Footer /> */}
  </div>
);

export default Layout;
