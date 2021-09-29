import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
    console.log(digimon)
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}` )
    .then((response) => dispatch(addDigimon(response.data[0].name)))
 

};

export default addDigimonsThunk;
