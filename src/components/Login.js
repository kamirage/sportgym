import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) {
      alert('Заполни все поля 📝');
      return;
    }
    login(name, age, gender);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h1 style={{ fontSize: 24 }}>Вход / профиль</h1>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: 16, display: 'grid', gap: 12, padding: 16, borderRadius: 16, background: '#020617', border: '1px solid #1f2937' }}
      >
        <label style={{ fontSize: 14 }}>
          Имя
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid #4b5563', background: '#020617', color: '#e5e7eb' }}
          />
        </label>
        <label style={{ fontSize: 14 }}>
          Возраст
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid #4b5563', background: '#020617', color: '#e5e7eb' }}
          />
        </label>
        <label style={{ fontSize: 14 }}>
          Пол
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="например: женский"
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
          Сохранить
        </button>
      </form>
    </div>
  );
}
