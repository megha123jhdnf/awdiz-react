import { useParams } from "react-router-dom"

const SinglePro =() => {
    const data =  useParams();
    console.log(data, "_data")
    return(
        <div>
            <h1>single product</h1>
            <h2>{data.id && data.id}</h2>
            </div>


    )
}
export default SinglePro;