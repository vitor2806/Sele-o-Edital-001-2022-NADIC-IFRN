import Head from "next/head";
import Header from "../../components/Header";
import { useRouter } from "next/router";

export default function poll(props) {
  console.log(fetch(useRouter().pathname));
  return (
    <div>
      <Head>
        <title>A</title>
      </Head>
      <Header />
      <p>Hi</p>
    </div>
  );
}
