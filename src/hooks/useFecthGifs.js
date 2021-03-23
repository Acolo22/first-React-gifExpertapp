import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (categoy) =>{

    const [state, setstate] = useState({
        data: [],
        loading:true
    });

    useEffect(() => {

        getGif(categoy)
            .then(imgs => {
                    setstate({
                        data: imgs,
                        loading:false

                    })     
              
               
                
            })

    },[categoy])

    return state;
}