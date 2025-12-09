import { useEffect, useMemo, useState } from 'react';

export default function Progress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('progress') || '[]');
    setProgress(saved.reverse());
  }, []);

  const totalMinutes = useMemo(
    () => progress.reduce((sum, p) => sum + (p.time || 0), 0),
    [progress]
  );

  return (
    <div style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: 24 }}>Прогресс</h1>
      <p style={{ fontSize: 14, opacity: 0.8, marginTop: 4 }}>
        Всего времени в тренировках: <strong>{totalMinutes}</strong> минут
      </p>
      {progress.length === 0 ? (
        <p style={{ marginTop: 16 }}>Пока нет сохранённых тренировок.</p>
      ) : (
        <div style={{ marginTop: 16, display: 'grid', gap: 10 }}>
          {progress.map((p, idx) => (
            <div
              key={idx}
              style={{
                padding: 12,
                borderRadius: 12,
                background: '#020617',
                border: '1px solid #1f2937',
                fontSize: 14
              }}
            >
              <div style={{ fontWeight: 600 }}>{p.workout}</div>
              <div style={{ opacity: 0.8, marginTop: 2 }}>
                {p.time} мин • {new Date(p.date).toLocaleString('ru-RU')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
