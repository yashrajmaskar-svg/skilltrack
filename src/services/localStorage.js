const STORAGE_KEYS = {
  USER: 'skilltrack_user',
  STUDENTS: 'skilltrack_students',
  SKILLS: 'skilltrack_skills',
  GOALS: 'skilltrack_goals',
  ACTIVITIES: 'skilltrack_activities',
  ACHIEVEMENTS: 'skilltrack_achievements',
  CLASSROOMS: 'skilltrack_classrooms',
  THEME: 'skilltrack_theme'
};

export const setUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null;
};

export const clearUser = () => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

export const getStudents = () => {
  const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
  return data ? JSON.parse(data) : [];
};

export const saveStudents = (students) => {
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
};

export const addStudent = (student) => {
  const students = getStudents();
  const newStudent = {
    ...student,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  students.push(newStudent);
  saveStudents(students);
  return newStudent;
};

export const updateStudent = (id, updates) => {
  const students = getStudents();
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updates, updatedAt: new Date().toISOString() };
    saveStudents(students);
    return students[index];
  }
  return null;
};

export const getStudentById = (id) => {
  const students = getStudents();
  return students.find(s => s.id === id);
};

export const getSkills = () => {
  const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
  return data ? JSON.parse(data) : [];
};

export const saveSkills = (skills) => {
  localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
};

export const addSkill = (skill) => {
  const skills = getSkills();
  const newSkill = {
    ...skill,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  skills.push(newSkill);
  saveSkills(skills);
  return newSkill;
};

export const updateSkill = (id, updates) => {
  const skills = getSkills();
  const index = skills.findIndex(s => s.id === id);
  if (index !== -1) {
    skills[index] = { ...skills[index], ...updates, updatedAt: new Date().toISOString() };
    saveSkills(skills);
    return skills[index];
  }
  return null;
};

export const deleteSkill = (id) => {
  const skills = getSkills();
  const filtered = skills.filter(s => s.id !== id);
  saveSkills(filtered);
};

export const getSkillsByStudent = (studentId) => {
  const skills = getSkills();
  return skills.filter(s => s.studentId === studentId);
};

export const getSkillById = (id) => {
  const skills = getSkills();
  return skills.find(s => s.id === id);
};

export const getGoals = () => {
  const data = localStorage.getItem(STORAGE_KEYS.GOALS);
  return data ? JSON.parse(data) : [];
};

export const saveGoals = (goals) => {
  localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
};

export const addGoal = (goal) => {
  const goals = getGoals();
  const newGoal = {
    ...goal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  goals.push(newGoal);
  saveGoals(goals);
  return newGoal;
};

export const updateGoal = (id, updates) => {
  const goals = getGoals();
  const index = goals.findIndex(g => g.id === id);
  if (index !== -1) {
    goals[index] = { ...goals[index], ...updates, updatedAt: new Date().toISOString() };
    saveGoals(goals);
    return goals[index];
  }
  return null;
};

export const deleteGoal = (id) => {
  const goals = getGoals();
  const filtered = goals.filter(g => g.id !== id);
  saveGoals(filtered);
};

export const getGoalsByStudent = (studentId) => {
  const goals = getGoals();
  return goals.filter(g => g.studentId === studentId);
};

export const getActivities = () => {
  const data = localStorage.getItem(STORAGE_KEYS.ACTIVITIES);
  return data ? JSON.parse(data) : [];
};

export const saveActivities = (activities) => {
  localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
};

export const addActivity = (activity) => {
  const activities = getActivities();
  const newActivity = {
    ...activity,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  activities.push(newActivity);
  saveActivities(activities);
  return newActivity;
};

export const updateActivity = (id, updates) => {
  const activities = getActivities();
  const index = activities.findIndex(a => a.id === id);
  if (index !== -1) {
    activities[index] = { ...activities[index], ...updates, updatedAt: new Date().toISOString() };
    saveActivities(activities);
    return activities[index];
  }
  return null;
};

export const deleteActivity = (id) => {
  const activities = getActivities();
  const filtered = activities.filter(a => a.id !== id);
  saveActivities(filtered);
};

export const getActivitiesByStudent = (studentId) => {
  const activities = getActivities();
  return activities.filter(a => a.studentId === studentId);
};

export const getActivitiesByGoal = (goalId) => {
  const activities = getActivities();
  return activities.filter(a => a.goalId === goalId);
};

export const getAchievements = () => {
  const data = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
  return data ? JSON.parse(data) : [];
};

export const saveAchievements = (achievements) => {
  localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
};

export const addAchievement = (achievement) => {
  const achievements = getAchievements();
  const newAchievement = {
    ...achievement,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  achievements.push(newAchievement);
  saveAchievements(achievements);
  return newAchievement;
};

export const getAchievementsByStudent = (studentId) => {
  const achievements = getAchievements();
  return achievements.filter(a => a.studentId === studentId);
};

export const getClassrooms = () => {
  const data = localStorage.getItem(STORAGE_KEYS.CLASSROOMS);
  return data ? JSON.parse(data) : [];
};

export const saveClassrooms = (classrooms) => {
  localStorage.setItem(STORAGE_KEYS.CLASSROOMS, JSON.stringify(classrooms));
};

export const addClassroom = (classroom) => {
  const classrooms = getClassrooms();
  const newClassroom = {
    ...classroom,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  classrooms.push(newClassroom);
  saveClassrooms(classrooms);
  return newClassroom;
};

export const updateClassroom = (id, updates) => {
  const classrooms = getClassrooms();
  const index = classrooms.findIndex(c => c.id === id);
  if (index !== -1) {
    classrooms[index] = { ...classrooms[index], ...updates, updatedAt: new Date().toISOString() };
    saveClassrooms(classrooms);
    return classrooms[index];
  }
  return null;
};

export const getClassroomById = (id) => {
  const classrooms = getClassrooms();
  return classrooms.find(c => c.id === id);
};

export const getTheme = () => {
  return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
};

export const setTheme = (theme) => {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
};

export const initializeSampleData = () => {
  if (getStudents().length > 0) return;

  const sampleStudents = [
    {
      id: 'student1',
      name: 'Alex Johnson',
      email: 'student@example.com',
      password: 'password123',
      grade: '10',
      avatar: '👦',
      interests: ['Technology', 'Sports'],
      createdAt: new Date().toISOString()
    }
  ];

  const sampleSkills = [
    {
      id: 'skill1',
      studentId: 'student1',
      name: 'Python Programming',
      category: 'Technology',
      level: 'Intermediate',
      progress: 65,
      createdAt: new Date().toISOString()
    },
    {
      id: 'skill2',
      studentId: 'student1',
      name: 'Public Speaking',
      category: 'Communication',
      level: 'Developing',
      progress: 45,
      createdAt: new Date().toISOString()
    },
    {
      id: 'skill3',
      studentId: 'student1',
      name: 'Mathematics',
      category: 'Academic',
      level: 'Advanced',
      progress: 78,
      createdAt: new Date().toISOString()
    },
    {
      id: 'skill4',
      studentId: 'student1',
      name: 'Digital Art',
      category: 'Creative',
      level: 'Developing',
      progress: 55,
      createdAt: new Date().toISOString()
    }
  ];

  const sampleGoals = [
    {
      id: 'goal1',
      studentId: 'student1',
      title: 'Complete Python Course',
      description: 'Finish advanced Python course on Codecademy',
      dueDate: '2024-12-31',
      status: 'in-progress',
      createdAt: new Date().toISOString()
    },
    {
      id: 'goal2',
      studentId: 'student1',
      title: 'Public Speaking Practice',
      description: 'Present 5 times in class',
      dueDate: '2024-11-30',
      status: 'in-progress',
      createdAt: new Date().toISOString()
    }
  ];

  const sampleActivities = [
    {
      id: 'activity1',
      studentId: 'student1',
      goalId: 'goal1',
      title: 'Complete Module 5',
      description: 'Finish Module 5 on Object-Oriented Programming',
      dueDate: '2024-09-10',
      completed: true,
      completedDate: new Date().toISOString(),
      createdAt: new Date().toISOString()
    },
    {
      id: 'activity2',
      studentId: 'student1',
      goalId: 'goal2',
      title: 'Prepare Presentation',
      description: 'Prepare slides for class presentation',
      dueDate: '2024-09-15',
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 'activity3',
      studentId: 'student1',
      goalId: 'goal2',
      title: 'Practice Speech',
      description: 'Practice speech delivery for 30 minutes',
      dueDate: '2024-09-12',
      completed: true,
      completedDate: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }
  ];

  const sampleAchievements = [
    {
      id: 'achievement1',
      studentId: 'student1',
      title: 'First Skill',
      description: 'Added your first skill',
      badge: '🎯',
      earnedDate: new Date().toISOString()
    },
    {
      id: 'achievement2',
      studentId: 'student1',
      title: '7-Day Streak',
      description: 'Learned for 7 consecutive days',
      badge: '🔥',
      earnedDate: new Date().toISOString()
    },
    {
      id: 'achievement3',
      studentId: 'student1',
      title: 'Skill Master',
      description: 'Reached Advanced level in a skill',
      badge: '⭐',
      earnedDate: new Date().toISOString()
    }
  ];

  saveStudents(sampleStudents);
  saveSkills(sampleSkills);
  saveGoals(sampleGoals);
  saveActivities(sampleActivities);
  saveAchievements(sampleAchievements);
};
