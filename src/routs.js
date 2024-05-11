import Home from "./Pages/Home/Home"
import UsersList from "./Pages/Users/UsersList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Products/Product"
import Data from "./Pages/Data/Data"

let routs=[
    {path:"/", element:<Home></Home> },
    {path:"/users", element:<UsersList></UsersList> },
    {path:"/newUser", element:<NewUser></NewUser> },
    {path:"/products", element:<Products></Products> },
    {path:"/products/:id", element:<Product></Product> },
    {path:"/newfeature", element:<Data></Data> },
]

export default routs