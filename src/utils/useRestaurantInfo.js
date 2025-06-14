import { useEffect, useState } from "react";
import { MENU_API_URL } from "./Constant";

const useRestaurantInfo=(resId)=>{
    const [resInfo, setResInfo]=useState(null);

    // Use Effect call to fetch the data
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch(MENU_API_URL+resId);
        const json= await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantInfo;