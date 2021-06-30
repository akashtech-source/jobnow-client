import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { sanityClient } from "../sanity";
import SearchBar from "../components/SearchBar";

const Home = ({ properties }) => {
  console.log(properties);
  
  return (
    <div>
        <Navbar />
        <SearchBar />
        <Post properties={properties}></Post>
        <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "property"]'
  const properties = await sanityClient.fetch(query)

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties
      }
    }
  }
}

export default Home;