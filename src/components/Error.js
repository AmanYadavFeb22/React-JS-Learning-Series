import { useRouteError } from "react-router";
const Error=()=>{
    const err=useRouteError()
    return(
        
        <div className="error">
        
           <h1>oops something is wrong!!</h1>
           
        </div>
        
        
    )
}
export default Error;