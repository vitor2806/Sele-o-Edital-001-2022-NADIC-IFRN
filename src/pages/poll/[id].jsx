import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function Vote() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    fetch(`../api/polls/${router.query.id}/poll`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (!data) return <p>Sem dados para a votação</p>;

  return (
    <>
      <Head>
        <title>{data.poll.name}</title>
      </Head>
      {/* Header */}
      <Header />
      <h2 className="text-center text-white">{data.poll.name}</h2>
      {/* Polls */}
      <div
        className={
          "container w-50 h-100 justify-content-start align-items-center rounded border border-start-0 border-end-0 border-3 border-info mt-3 mb-4 p-5 flex-column main gap-5"
        }
      >
        {/* Pra cada opção dentro do JSON options, crie uma opção votavel dentro do select */}
        <form
          action={`/api/polls/${router.query.id}/vote`}
          className="p-3 w-50 border border-3 bg-light bg-opacity-10 rounded border-top-0 border-bottom-0 border-warning"
          method="POST"
        >
          <p className="m-0 text-white">Opções</p>
          <hr className="bg-warning" />
          {data.options.map((option, index) => {
            return (
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="vote-button"
                  id={index}
                  key={index}
                  value={option.name}
                />
                <label
                  htmlFor={option.name + index}
                  className="form-check-label text-white"
                >
                  {option.name}
                </label>
              </div>
            );
          })}
          <hr className="bg-warning" />

          <div className="d-flex flex-column text-center gap-2">
            <label className="m-0 text-white form-label" htmlFor="cpf">
              CPF
            </label>
            <input
              name="cpf"
              id="cpf"
              type="text"
              minLength={11}
              maxLength={11}
              className="form-control bg-light bg-opacity-10 border-2 border-top-0 border-bottom-0 border-info p-2 text-white"
              placeholder="00011122233"
              required
            />
            <button className="btn bg-info">Concluir votação</button>
          </div>
        </form>
        <h3 className="text-center text-white mb-0">Resultados</h3>
        <div className="container w-50 bg-light bg-opacity-10 border border-3 border-top-0 border-bottom-0 border-warning p-2 text-white">
          <div className="m-2 d-flex justify-content-between text-muted">
            <span>Opções</span>
            <span>Votos</span>
          </div>
          <hr className="bg-warning" />

          {data.votes.map((vote, index) => {
            return (
              <>
                <div className="m-2 d-flex justify-content-between">
                  <span>{data.options[index].name}</span>
                  <span>{vote["count(option_id)"]}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
