import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <div className="iclass">
            <span class="hint--top hint--rounded" aria-label="Escribe lo que necesites encontrar! El que quieras!">
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
            </span>
            </div>

        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;