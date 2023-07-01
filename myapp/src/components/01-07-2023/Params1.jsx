import { useNavigate } from "react-router-dom";

  function Params1(){
    const router = useNavigate();
    function goto(){
        router('/single-product/897654678')
    }
    return(
        <div>
            <button onClick={goto}>Click here</button>
        </div>
    )

  }
  export default Params1;