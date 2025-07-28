import { useContext } from "react"
import UserContext from "./utils/userContaxt"
const Contact=()=>{
  const {loginUser}=useContext(UserContext)
    return(
      
        <div className="text-center">
          <h1 className="font-bold text-xl">Welcome to contact us page</h1>
          <h2>Developed by:{loginUser}</h2>
        </div>
        
    )
}
export default Contact