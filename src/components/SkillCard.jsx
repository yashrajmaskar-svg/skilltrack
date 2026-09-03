import { Edit2, Trash2, TrendingUp } from 'lucide-react';

function SkillCard({ skill, onEdit, onDelete }) {
  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Developing': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Advanced': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Expert': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return colors[level] || 'bg-slate-100 text-slate-800';
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      'Academic': '📚',
      'Technology': '💻',
      'Communication': '🗣️',
      'Creative': '🎨',
      'Leadership': '👑',
      'Life Skills': '⚙️',
      'Sports': '⚽'
    };
    return emojis[category] || '🎯';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{getCategoryEmoji(skill.category)}</span>
          <div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition"
          >
            <Edit2 size={18} className="text-blue-600" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp size={16} />
            <span className="text-sm font-semibold">{skill.progress}%</span>
          </div>
        </div>
        
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
            style={{ width: `${skill.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
