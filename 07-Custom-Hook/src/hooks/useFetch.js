import { useState,useEffect } from "react";

function useFetch(url){

    const [data,setData] = useState([])

    const [loading,setLoading] =useState(true)

    const [error,setError] =useState("")

    useEffect(()=>{
        async function fecthData() {
            try{

                const response =await fetch(url)

                const result =await response.json()

                setData(result)
            }
            catch(error){
                setError("something went wrong")
            
            }
            finally{
                setLoading(false)
            }
        }
        fecthData()
    },[url])

    return{
        data,loading,error
    }
}

export default useFetch