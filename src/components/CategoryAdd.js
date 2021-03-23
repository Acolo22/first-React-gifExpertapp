import React, {useState} from 'react'
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length >= 1){
          setCategorias(cats => [inputValue,...cats]);
          setinputValue('');
        }
       

    }

    return (
        <form onSubmit= {handleSubmit}>
          <input
            type="text"
            value = {inputValue}
            onChange = {handleInputChange}
          />
        </form>
    )
}


CategoryAdd.propTypes = {
  setCategorias: PropTypes.func.isRequired
}


export default CategoryAdd
