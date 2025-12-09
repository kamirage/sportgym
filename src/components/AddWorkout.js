import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddWorkout() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Силовая');
  const [duration, setDuration] = useState(30);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Дай тренировке название 💪');
      return;
    }
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    const newWorkout = {
      id: Date.now(),
      name,
      type,
      duration: Number(duration) || 0
    };
    const updated = [...workouts, newWorkout];
    localStorage.setItem('workouts', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <h1 style={{ fontSize: 24 }}>Новая тренировка</h1>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: 16, display: 'grid', gap: 12, padding: 16, borderRadius: 16, background: '#020617', border: '1px solid #1f2937' }}
      >
        <label style={{ fontSize: 14 }}>
          Название
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Например: Ноги + ягодицы"
            style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid #4b5563', background: '#020617', color: '#e5e7eb' }}
          />
        </label>
        <label style={{ fontSize: 14 }}>
          Тип
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid #4b5563', background: '#020617', color: '#e5e7eb' }}
          >
            <option>Силовая</option>
            <option>Кардио</option>
            <option>Мобилити</option>
            <option>Йога</option>
          </select>
        </label>
        <label style={{ fontSize: 14 }}>
          Длительность (мин)
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid #4b5563', background: '#020617', color: '#e5e7eb' }}
          />
        </label>
        <button
          type="submit"
          style={{
            marginTop: 4,
            padding: '10px 14px',
            borderRadius: 999,
            border: 'none',
            background: '#22c55e',
            color: '#020617',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          Сохранить тренировку
        </button>
      </form>
    </div>
  );
}
