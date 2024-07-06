import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import ConfirmModal from './ConfirmModal';

function ParsePage() {
    const [params, setParams] = useState({ text: ''});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleParse = () => {
        setIsModalOpen(true);
        const queryString = new URLSearchParams(params).toString();
        fetch(`http://localhost:8000/parse/?${queryString}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setError(null); // Сброс ошибки при успешном запросе
                navigate('/vacancies'); // Переход на страницу вакансий
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    };

    /*Функция, обновляющая параметры поиска*/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src="Lupa.png" alt='' className="el lupa"/>
                <input
                    type="text"
                    name='text'
                    className='el frame1-rectangle13'
                    placeholder="Профессия, должность или компания"
                    value={params.text}
                    onChange={handleChange}
                />
                <input type="submit" value="Найти" className="button1" onClick={handleParse}/>

                {error && <p style={{color: 'red'}}>Error: {error}</p>}
            </header>
            <ConfirmModal
                isOpen={isModalOpen}
            />
        </div>
    );
}

export default ParsePage;
