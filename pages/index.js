import { useState } from "react";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(["Do the dishes"]);
  if (loading) return <div>Loading...</div>;
  return (
    <Layout>
      <div className="container">
        <h1 className="title"> NextHabits</h1>
      </div>
      <div className="list">
        <HabitForm setHabits={setHabits} />
        <HabitList habits={habits} />
      </div>

      <style jsx>
        {`
          .list {
            max-width: 600px;
            margin: 0 auto;
          }
          .title {
            margin-top: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
        `}
      </style>
    </Layout>
  );
};
export default withApollo(Home);
