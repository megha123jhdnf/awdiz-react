import { useNavigate } from "react-router-dom";

function Xyz (){
    const router = useNavigate()

    function goTo(){
        router('/single-pro/8214562')
    }
    return(
        <div>
            <button onClick={goTo}> GO to single product</button>
        </div>
    )
}
export default Xyz;