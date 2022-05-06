import React, {useState} from 'react';

function SortForm({ filterSubmit, onReset }) {
    const [ column, setColumn ] = useState('');
    const [ condition, setCondition ] = useState('');
    const [ inputField, setInputField ] = useState('');

    function handleColumnChange(e) {
        setColumn(e.target.value)
    }

    function handleConditionChange(e) {
        setCondition(e.target.value)
    }

    function handleInputFieldChange(e) {
        setInputField(e.target.value)
    }

    function onClearFilter() {
        setColumn('');
        setCondition('');
        setInputField('');
        onReset();
    }

    function handleSubmit(e) {
        e.preventDefault();
        filterSubmit({ column, condition, inputField });
    }

    return (
        <form className="table-form" onSubmit={handleSubmit}>
            <select name="column" value={column} onChange={handleColumnChange} required>
                <option value=""></option>
                <option value="name">Имя</option>
                <option value="points">Количество</option>
                <option value="distance">Расстояние</option>
            </select>
            <select name="condition" value={condition} onChange={handleConditionChange} required>
                <option value=""></option>
                <option value="equal">Равно</option>
                <option value="contain">Содержит</option>
                <option value="greater">Больше</option>
                <option value="less">Меньше</option>
            </select>
            <input
                name="inputField"
                value={inputField}
                onChange={handleInputFieldChange}
                type="text"
                placeholder="Значение"
                required
            />
            <button className="table-form__button" type="reset" onClick={onClearFilter}>
                Сброс
            </button>
            <button className="table-form__button" type="submit">
                Фильтр
            </button>
        </form>
    );
}

export default SortForm;
