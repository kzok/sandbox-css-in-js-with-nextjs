import type { NextPage, GetServerSideProps } from "next";
import { Page } from "../../components/emotion";

const Index: NextPage = () => <Page />;

export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });

export default Index;
