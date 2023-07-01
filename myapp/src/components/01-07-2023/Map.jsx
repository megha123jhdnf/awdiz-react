const Map = (props) =>{
    console.log(props.myUsers,"Here")
    return(
        <div>
            {
                props.kuchbhi && props?.kuchbhi.map((str) =>(
                    <div key={str}>
                        <h2>{str}</h2>
                        </div>


            ))}
                <button onClick={() => props?.setMyUsers([...props.myUsers, "Awdiz"])}>Add user</button>
              {props.myName && props.myName}


        </div>
    )
}
export default Map;