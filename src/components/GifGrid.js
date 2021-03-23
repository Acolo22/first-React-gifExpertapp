import React from 'react'
import { useFetchGifs } from '../hooks/useFecthGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoy}) => {


    const {data:images,loading} = useFetchGifs(categoy);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoy}</h3>
            {loading && <p className="animate__animated animate__flash">Loading..</p> }
            <div className="card-grid">               
                    {
                        images.map(img =>(
                            <GifGridItem
                            key ={img.id} 
                            {...img}/>
                        ))
                    }
            </div>
        </>
    )
}
