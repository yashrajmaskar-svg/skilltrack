import { Calendar, CheckCircle, Circle, Edit2, Trash2 } from 'lucide-react';

function ActivityItem({ activity, onEdit, onDelete, onToggle }) {
  const isCompleted = activity.completed;
  const daysLeft = Math.ceil((new Date(activity.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0;

  return (
    <div className={`rounded-lg border p-4 transition ${
      isCompleted
        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className="mt-1 flex-shrink-0"
        >
          {isCompleted ? (
            <CheckCircle size={24} className="text-green-600" />
          ) : (
            <Circle size={24} className="text-slate-300 dark:text-slate-600 hover:text-slate-400" />
          )}
        </button>

        <div className="flex-1">
          <h3 className={`font-semibold ${isCompleted ? 'line-through text-slate-500' : ''}`}>
            {activity.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {activity.description}
          </p>

          <div className="flex items-center gap-2 mt-3 text-sm">
            <Calendar size={16} />
            <span className={isOverdue && !isCompleted ? 'text-red-600 font-semibold' : 'text-slate-600 dark:text-slate-400'}>
              {isCompleted ? 'Completed' : (daysLeft < 0 ? `${Math.abs(daysLeft)} days overdue` : `${daysLeft} days left`)}
            </span>
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
    </div>
  );
}

export default ActivityItem;
