import { useEffect, useState } from "react";
import { HangImage } from "./components/HangImage";
import { letters } from "./assets/letters";
import { getRandomWord } from "./assets/getRandomWord";

function App() {
  const [word, setWord] = useState(getRandomWord);
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose) return;
    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }
    const hiddenWordArray = hiddenWord.split(" ");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(" "));
  };

  const newGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  };

  return (
    <div className="App ">
      <HangImage imageNumber={attempts} />
      <h3 className=" text-sky-400 font-extrabold text-2xl p-2">
        {hiddenWord}
      </h3>
      <h3 className="font-bold p-2">
        Intentos: <span className="text-2xl text-sky-400">{attempts}</span>
      </h3>
      {lose ? (
        <h2 className="text-2xl p-3 font-bold">
          Horcaste a tu amigo, la palabra era{" "}
          <span className="text-2xl text-sky-400">{word}</span>{" "}
        </h2>
      ) : (
        ""
      )}
      {won ? (
        <h2 className="text-2xl p-3 font-bold">
          Felicidades, has salvado a tu amigo.
        </h2>
      ) : (
        ""
      )}
      {letters.map((letter) => (
        <button
          onClick={() => checkLetter(letter)}
          className="p-2 bg-slate-200 m-1 rounded-xl text-sky-400 font-bold h-15 w-10"
          key={letter}
        >
          {letter}
        </button>
      ))}

      <br />
      <br />
      <button
        className="p-2 bg-slate-200 m-1 rounded-xl text-sky-400 font-bold"
        onClick={newGame}
      >
        Jugamos de nuevo?
      </button>
      <div className="p-10 font-bold">
        <marquee>
          <a
            href="https://juanitho007.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita mis otros proyectos
          </a>
        </marquee>
        <p>
          <span>&#x276e;Hecho con </span>
          <a
            className="text-sky-400 text-3xl"
            href="https://www.academlo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-heart bx-flip-horizontal bx-burst"></i>
          </a>
          <span> en Academlo&#x276f;_</span>
        </p>
      </div>
    </div>
  );
}

export default App;
