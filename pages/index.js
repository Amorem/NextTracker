import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HabitList from "../components/HabitList";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <Layout>
      <div className="container">
        <h1 className="title">
          <HabitList />
        </h1>
      </div>
    </Layout>
  );
};
export default withApollo(Home);
