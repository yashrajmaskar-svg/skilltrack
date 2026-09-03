import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Target, CheckSquare, Trophy, Briefcase, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

function Layout({ children, title }) {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentNavItems = [
    { label: 'Dashboard', icon: Home, path: '/' },
    { label: 'My Skills', icon: BookOpen, path: '/skills' },
    { label: 'Goals', icon: Target, path: '/goals' },
    { label: 'Activities', icon: CheckSquare, path: '/activities' },
    { label: 'Achievements', icon: Trophy, path: '/achievements' },
    { label: 'Portfolio', icon: Briefcase, path: '/portfolio' }
  ];

  const teacherNavItems = [
    { label: 'Dashboard', icon: Home, path: '/' },
    { label: 'Classrooms', icon: BookOpen, path: '/classrooms' }
  ];

  const parentNavItems = [
    { label: 'Dashboard', icon: Home, path: '/' }
  ];

  const adminNavItems = [
    { label: 'Dashboard', icon: Home, path: '/' }
  ];

  let navItems = studentNavItems;
  if (user?.role === 'teacher') navItems = teacherNavItems;
  else if (user?.role === 'parent') navItems = parentNavItems;
  else if (user?.role === 'admin') navItems = adminNavItems;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-2xl font-bold text-primary">SkillTrack</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(item => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">{user?.name}</span>
            <div className="text-2xl">{user?.avatar || '👤'}</div>
          </div>
        </header>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <nav className="p-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
