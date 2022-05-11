import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Poll from "../components/Poll";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Votações</title>
      </Head>
      {/* Header */}
      <Header option="Criar votação" href="/poll/create" />
      <h2 className="text-center text-white">Votações ativas</h2>
      <p className="w-100 text-center text-white opacity-50">
        Para criar uma basta clicar no botão acima
      </p>

      {/* Polls */}
      <div
        className={`${"container w-50 h-100 justify-content-start align-items-center rounded border border-start-0 border-end-0 border-3 border-info mt-3 mb-4 p-5 flex-column"} ${
          styles.main
        }`}
      >
        <Poll date="10/03/2022" name="Reitor do Campus" votes={11123} />
        <Poll date="10/03/2022" name="Reitor do Campus" votes={11123} />
        <Poll date="10/03/2022" name="Reitor do Campus" votes={11123} />
        <Poll date="10/03/2022" name="Reitor do Campus" votes={11123} />
      </div>
      <Footer />
    </>
  );
}
