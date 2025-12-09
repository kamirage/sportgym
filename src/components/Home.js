// src/components/Home.js

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать в SportGym!</h1>
      <p>Здесь ты можешь отслеживать свои тренировки, прогресс и планировать занятия.</p>
      <p>Выбери, что хочешь сделать:</p>
      <ul>
        <li>Перейти к <a href="/workouts">тренировкам</a></li>
        <li>Посмотреть <a href="/plan">план</a></li>
        <li>Отслеживать <a href="/progress">прогресс</a></li>
      </ul>
    </div>
  );
}
