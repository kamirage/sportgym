import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Workouts from './components/Workouts';
import Profile from './components/Profile';
import Progress from './components/Progress';
import Login from './components/Login';
import AddWorkout from './components/AddWorkout';
import WorkoutPlan from './components/WorkoutPlan';
import Home from './components/Home'; // импортируем новую главную страницу
import { useAuth } from './context/AuthContext';

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '16px 24px', borderBottom: '1px solid #1f2933', display: 'flex', alignItems: 'center', gap: 24 }}>
        {/* Изменяем ссылку SportGym на главную страницу */}
        <div style={{ fontWeight: 700, fontSize: 20 }}>
          <Link to="/" style={{ color: '#22c55e', textDecoration: 'none' }}>SportGym</Link>
        </div>
        <nav style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <Link to="/workouts">Тренировки</Link>
          <Link to="/plan">План</Link>
          <Link to="/progress">Прогресс</Link>
          <Link to="/profile">Профиль</Link>
        </nav>
        <div style={{ marginLeft: 'auto', fontSize: 14 }}>
          {user ? `👤 ${user.name}` : <Link to="/login">Войти</Link>}
        </div>
      </header>
      <main style={{ flex: 1, padding: '24px', maxWidth: 960, width: '100%', margin: '0 auto' }}>
        {children}
      </main>
      <footer style={{ padding: '12px 24px', fontSize: 12, opacity: 0.6, textAlign: 'center' }}>
        Лёгкое веб-приложение для трекинга тренировок
      </footer>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Добавляем новую главную страницу */}
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/progress"
            element={
              <PrivateRoute>
                <Progress />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-workout"
            element={
              <PrivateRoute>
                <AddWorkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/plan"
            element={
              <PrivateRoute>
                <WorkoutPlan />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
