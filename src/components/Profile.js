import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Вы не авторизованы.</p>;
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1 style={{ fontSize: 24 }}>Профиль</h1>
      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 16,
          background: '#020617',
          border: '1px solid #1f2937'
        }}
      >
        <p><strong>Имя:</strong> {user.name}</p>
        <p><strong>Возраст:</strong> {user.age}</p>
        <p><strong>Пол:</strong> {user.gender}</p>
        <button
          onClick={logout}
          style={{
            marginTop: 12,
            padding: '8px 14px',
            borderRadius: 999,
            border: 'none',
            background: '#ef4444',
            color: '#f9fafb',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
