import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import Poll from "../components/Poll";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/polllist")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (!data) return <p>Sem dados</p>;
  return (
    <>
      <Head>
        <title>Votações</title>
      </Head>
      {/* Header */}
      <Header />
      <h2 className="text-center text-white">Votações ativas</h2>
      <p className="w-100 text-center text-white opacity-50">
        Para criar uma basta clicar no botão acima
      </p>

      {/* Polls */}
      <div
        className={
          "container w-50 h-100 justify-content-start align-items-center rounded border border-start-0 border-end-0 border-3 border-info mt-3 mb-4 p-5 flex-column main"
        }
      >
        {/* Pra cada elemento na array polls crie um componente Polls passando seu index e as demais propriedades */}
        {data.polls.map((poll, index) => {
          return (
            <Poll
              name={poll.name}
              id={index + 1}
              expire={poll.expires_at}
              key={index + 1}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
