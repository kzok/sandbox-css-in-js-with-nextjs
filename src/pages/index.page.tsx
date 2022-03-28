import { NextPage, GetServerSideProps } from "next";

const Index: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: "./styled-component",
    },
  };
};

export default Index;
