import React, {useState} from 'react'
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    
    const [categorias, setCategorias] = useState (['One Punch']);

    // const handleAdd = () =>{
    //     // setCategorias(['Titans',...categorias]);
    //     setCategorias(cats => [...categorias,'Titas2'])
    // }



    return (
        <>
             <h2>GifExpertApp </h2>
             <CategoryAdd setCategorias = {setCategorias}></CategoryAdd>
             <hr/>

             <ol>
                 {
                 categorias.map(category => (
                        <GifGrid
                            key={category}
                            categoy={category} 
                        />
                    ))
                 }
             </ol>
        </>
    )
}

export default GifExpertApp


