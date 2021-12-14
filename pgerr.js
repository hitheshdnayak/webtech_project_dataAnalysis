import { Link } from "react-router-dom"

const Error =()=>{
    return (
        <div >
            <h1>Sorry...</h1>
            <p>This page is not found. :(</p>
            <Link to="/">Back to home page.</Link>
        </div>
    )
}
export default Error