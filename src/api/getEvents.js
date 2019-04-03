import axios from "axios"

let url = "/events?limit=5&longitude=-73.9815&latitude=40.7265&radius=500"
let token = "gnAZUSnVJOfnzL-6EJOzZfLf9xrnMqWISx0B8AjyCd9WWbxMo0LzW87aJPqofWDN6dG-R5LehAYdiYThF6T4wzF2UBmwl312y6DkYrik0gtXrhsAv8I-1Mb6esukXHYx"

const AuthStr = 'Bearer '.concat(token);
const getData = async () =>{
    try{
        const data = await axios.get(url, { headers: { Authorization: AuthStr } })
        return data 
    }catch(err){
        return null
    }
}


export default getData

