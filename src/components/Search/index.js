import { Container } from "./style"
import { useState } from "react";
import {useDispatch} from "react-redux"
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch()
 const handleSearch = () => {
   setError(false);
   dispatch(addDigimonsThunk(input));
   setInput("")

}

  return (
    <Container>
      <h2>Encontre o seu Digimon!!</h2>
      <div>
        <input
          placeholder="Ex.: Agumon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick = {handleSearch}>Encontrar</button>
      </div>
    </Container>
  );
};
export default Search;
