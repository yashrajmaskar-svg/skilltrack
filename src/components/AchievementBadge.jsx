function AchievementBadge({ achievement }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition">
      <div className="text-5xl">{achievement.badge}</div>
      <h3 className="font-semibold text-center text-sm">{achievement.title}</h3>
      <p className="text-xs text-slate-600 dark:text-slate-400 text-center">{achievement.description}</p>
      <p className="text-xs text-slate-500 dark:text-slate-500">
        {new Date(achievement.earnedDate).toLocaleDateString()}
      </p>
    </div>
  );
}

export default AchievementBadge;
