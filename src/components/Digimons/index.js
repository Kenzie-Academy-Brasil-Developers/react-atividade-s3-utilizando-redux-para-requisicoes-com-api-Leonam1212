import {useSelector} from "react-redux"
import {Container} from "./style"
const Digimons = () => {
    const digimons = useSelector((state) =>  state.digimons)
    return(
        <Container>
            <ul>
                {digimons.map((element, index) => (
                   <li key = {index}> {element} </li> 
                ))}
           
            </ul>
        </Container>
    )
}
export default Digimons