import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('workouts');
    if (saved) {
      setWorkouts(JSON.parse(saved));
    } else {
      const base = [
        { id: 1, name: 'Фулл-боди', type: 'Силовая', duration: 40 },
        { id: 2, name: 'Кардио 20 минут', type: 'Кардио', duration: 20 },
        { id: 3, name: 'Растяжка', type: 'Мобилити', duration: 15 }
      ];
      setWorkouts(base);
      localStorage.setItem('workouts', JSON.stringify(base));
    }
  }, []);

  const startWorkout = (w) => {
    const time = prompt(`Сколько минут сделал(а) в тренировке "${w.name}"?`, w.duration);
    if (!time) return;
    const entry = { workout: w.name, time: Number(time), date: new Date().toISOString() };
    const saved = JSON.parse(localStorage.getItem('progress') || '[]');
    saved.push(entry);
    localStorage.setItem('progress', JSON.stringify(saved));
    alert('Прогресс сохранён ✅');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Тренировки</h1>
        <Link to="/add-workout" style={{ fontSize: 14, padding: '8px 12px', borderRadius: 999, border: '1px solid #22c55e' }}>
          + Добавить
        </Link>
      </div>
      {workouts.length === 0 ? (
        <p>Пока нет тренировок.</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {workouts.map((w) => (
            <div
              key={w.id}
              style={{
                padding: 16,
                borderRadius: 16,
                background: '#020617',
                border: '1px solid #1f2937',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{w.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {w.type} • {w.duration} мин
                </div>
              </div>
              <button
                onClick={() => startWorkout(w)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: 'none',
                  background: '#22c55e',
                  color: '#020617',
                  fontSize: 14,
                  fontWeight: 600
                }}
              >
                Старт
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
