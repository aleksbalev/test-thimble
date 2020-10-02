import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Clients from '../components/Clients/Clients';
import Carousel from '../components/Carousel/Carousel';
import Reviews from '../components/Reviews/Reviews';

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Clients />
      <Carousel />
      <Reviews />
    </Layout>
  );
}
