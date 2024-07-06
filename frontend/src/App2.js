import React, { useState, useEffect } from 'react';
import "./App2.css";
function VacanciesPage() {
    const [vacancies, setVacancies] = useState([]);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        city: '',
        company: '',
        experience: '',
        graf:'',
    });


    useEffect(() => {

        fetch('http://localhost:8000/vacancies/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setVacancies(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredVacancies = vacancies.filter(vacancy => {
        return (
            (filters.city === '' || vacancy.city.toLowerCase().includes(filters.city.toLowerCase())) &&
            (filters.company === '' || vacancy.company_name.toLowerCase().includes(filters.company.toLowerCase())) &&
            (filters.experience === '' || vacancy.experience.toLowerCase().includes(filters.experience.toLowerCase())) &&
            (filters.graf === '' || vacancy.graf.toLowerCase().includes(filters.graf.toLowerCase()))
        );
    });



    return (
        <div className="App">
            <header className="App-header2">
                <h1 className='vac'>Вакансии</h1>
                {error && <p style={{color: 'red'}}>Error: {error}</p>}
                <div className="row">
                    <div className="col">
                    <input
                        type="text"
                        name="city"
                        placeholder="Город"
                        value={filters.city}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Компания"
                        value={filters.company}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="experience"
                        placeholder="Опыт работы"
                        value={filters.experience}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="graf"
                        placeholder="График"
                        value={filters.graf}
                        onChange={handleFilterChange}
                    />
                    </div>
                    <form action="http://localhost:3000">
                        <button className="but">Главная страница</button>
                    </form>
                </div>
                <div>
                    <ul>
                        {filteredVacancies.map((vacancy, index) => (
                            <div className='text1'>
                                <li key={index}>
                                    <h3>{vacancy.title}</h3>
                                    <p>Опыт работы: {vacancy.experience}</p>
                                    <p>График работы: {vacancy.graf}</p>
                                    <p>Город: {vacancy.city}</p>
                                    <p>Компания: {vacancy.company_name}</p>
                                    <p>Минимальная
                                        зарплата: {vacancy.salary_min !== null ? vacancy.salary_min + ' руб' : 'Не указано'}</p>
                                    <p>Максимальная
                                        зарплата: {vacancy.salary_max !== null ? vacancy.salary_max + ' руб' : 'Не указано'}</p>
                                    <p>Требования: {vacancy.requirement}</p>
                                    <p>Обязанности: {vacancy.responsibility}</p>
                                    <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer">Ссылка</a>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default VacanciesPage;