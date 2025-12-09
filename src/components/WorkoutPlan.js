import { useEffect, useState } from 'react';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export default function WorkoutPlan() {
  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem('plan');
    if (saved) return JSON.parse(saved);
    return WEEK_DAYS.map((day) => ({ day, workout: '' }));
  });

  useEffect(() => {
    localStorage.setItem('plan', JSON.stringify(plan));
  }, [plan]);

  const handleChange = (index, value) => {
    const copy = [...plan];
    copy[index].workout = value;
    setPlan(copy);
  };

  return (
    <div style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: 24 }}>План на неделю</h1>
      <p style={{ fontSize: 14, opacity: 0.8, marginTop: 4 }}>
        Запланируй, что будешь делать в каждый день недели. Просто впиши название тренировки.
      </p>
      <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
        {plan.map((item, index) => (
          <div
            key={item.day}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 12,
              background: '#020617',
              border: '1px solid #1f2937'
            }}
          >
            <div style={{ width: 40, fontWeight: 600 }}>{item.day}</div>
            <input
              value={item.workout}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Например: кардио + пресс"
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 8,
                border: '1px solid #4b5563',
                background: '#020617',
                color: '#e5e7eb',
                fontSize: 14
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
