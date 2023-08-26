import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Welcome to QuizApp</h1>
                <p>Test your knowledge with fun quizzes!</p>
            </header>
            <main className="main-content">
                <section className="featured-quiz">
                    <h2>Featured Quiz</h2>
                    <p>Try our featured quiz and challenge yourself!</p>
                    <button className="start-quiz-button">Start Quiz</button>
                </section>
                <section className="about">
                    <h2>About QuizApp</h2>
                    <p>Learn more about our amazing quiz application.</p>
                    <a href="/about" className="learn-more-link">Learn More</a>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2023 QuizApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;