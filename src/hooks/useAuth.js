import { useState, useEffect, useCallback } from 'react';
import { setUser, getUser, clearUser, getStudents, initializeSampleData } from '../services/localStorage';

export const useAuth = () => {
  const [user, setUserState] = useState(() => {
    const savedUser = getUser();
    return savedUser || null;
  });

  useEffect(() => {
    initializeSampleData();
  }, []);

  const login = useCallback((email, password) => {
    const students = getStudents();
    
    let existingUser = students.find(s => s.email === email);
    
    if (!existingUser) {
      if (email === 'student@example.com' && password === 'password123') {
        existingUser = students[0];
      } else if (email === 'teacher@example.com' && password === 'password123') {
        existingUser = {
          id: 'teacher1',
          name: 'Ms. Sarah',
          email: 'teacher@example.com',
          role: 'teacher',
          avatar: '👩‍🏫'
        };
      } else if (email === 'parent@example.com' && password === 'password123') {
        existingUser = {
          id: 'parent1',
          name: 'Mr. Johnson',
          email: 'parent@example.com',
          role: 'parent',
          avatar: '👨',
          childId: 'student1'
        };
      } else if (email === 'admin@example.com' && password === 'password123') {
        existingUser = {
          id: 'admin1',
          name: 'Admin',
          email: 'admin@example.com',
          role: 'admin',
          avatar: '🔧'
        };
      } else {
        return null;
      }
    }

    const userWithRole = {
      ...existingUser,
      role: existingUser.role || 'student'
    };

    setUser(userWithRole);
    setUserState(userWithRole);
    return userWithRole;
  }, []);

  const logout = useCallback(() => {
    clearUser();
    setUserState(null);
  }, []);

  return { user, login, logout };
};
