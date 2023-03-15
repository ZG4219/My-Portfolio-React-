import React from 'react';

function Portfolio() {
    return (
        <div className="bg-white-100">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="https://zg4219.github.io/movie-selector" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/Screenshot_20221101_050440.png")} alt="Project 1" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 1</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm"><b>Movie Search App:</b> This Movie Search project is a web application
                                    that allows users to search for movies by title or keyword. It
                                    uses HTML to structure the web page, CSS to style the page, and
                                    JavaScript to fetch movie data from an API such as OMDB or TMDB,
                                    and display it on the page. Users can search for movies, view
                                    movie details such as the plot, cast, and ratings, and save movies
                                    to a watchlist. The app may also include additional features such
                                    as filtering by genre, sorting by release date or rating, and
                                    displaying related movie recommendations.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://recipes-cook-book.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/Screenshot_20230110_102849.png")} alt="Project 2" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 2</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm"> <b>Recipe Book App:</b> This Recipe Book project is a web application that allows users to browse and save recipes. It uses HTML to structure the web page, CSS to style the page, and JavaScript to
                                    fetch recipe data from an API or a database, and display it on the
                                    page. Users can browse recipes by category, search for recipes by
                                    keyword, view recipe details such as ingredients and instructions,
                                    and save recipes to their favorites or create custom recipe
                                    collections. The app may also include additional features such as
                                    meal planning, ingredient substitution suggestions, and
                                    nutritional information.</p>
                            </div>
                        </div>
                    </a>
                    <a href=" https://zg4219.github.io/Weather-Forecast/" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/Screenshot_20221203_021412.png")} alt="Project 3" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 3</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm"><b>Five Day Weather Forecast</b> is a web application built using HTML, CSS, Javascript, and API. The application allows users to enter a location and view the weather forecast for the next 5 days. The application fetches the weather data using a third-party API and displays it in an easy-to-read format. The user interface is designed using HTML and CSS to make it visually appealing and user-friendly. The application uses Javascript to handle user interactions and API requests. Overall, the 5-day Weather Forecast project provides a useful tool for users to plan their activities based on the weather forecast.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://note-taker-express-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/Screenshot-2023-03-04-162434.jpg")} alt="Project 4" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 4</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm"><b>Note Taker</b> project is a web application built using Express.js that allows users to create, save, and delete notes. The application has a simple and user-friendly interface that displays all saved notes on the left side of the screen and a form for creating new notes on the right side of the screen. Users can click on any saved note to view its details, edit it, or delete it. The notes are saved in a JSON file on the server-side and can be accessed and modified by the user as needed. The Note Taker project provides a convenient way for users to keep track of their notes and ideas, and with the use of Express.js, it offers a seamless and efficient user experience.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://zg4219.github.io/CODE-Password-Generator/" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/Screenshot_20221118_110017.png")} alt="Project 5" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 5</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm"><b>Password Generator</b> is a web-based application that lets users generate strong and unique passwords using HTML, CSS, and Javascript. The user interface is simple and intuitive, allowing users to choose the length and complexity of the password, including options for uppercase and lowercase letters, numbers, and special characters. The Javascript code generates a random password based on the user's preferences, which can then be copied to the clipboard. Overall, this Password Generator provides a convenient and secure way for users to create strong passwords for their accounts.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative block">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={require("../assets/FitnessJournal.png")} alt="Project 6" className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-105" />
                            <div className="px-4 py-4">
                                <h2 className="text-xl font-bold text-gray-800">Project 6</h2>
                                <p className="text-gray-600 mt-2 font-extralight text-sm">"Introducing my latest project, a <b>Fitness Journal 3.0 App</b> project is a web-based fitness diary application built using the MERN stack, offering users a personalized platform to track workouts, nutrition, and overall progress. With features like a customizable dashboard, workout and nutrition tracking, goal setting, progress reports, and social interaction, this innovative solution helps individuals stay motivated and accountable while working towards their fitness goals.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
