import { useState } from 'react';

export default ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);
  return (
    <div
      className="bg-white grid gap-4 p-4 shadow-md w-full rounded-md"
      onClick={toggleCollapse}
    >
      <div className="flex flex-row justify-between select-none">
        {[...children][0]}
        <span className="font-icon">
          {collapsed ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      {collapsed && [...children].slice(1)}
    </div>
  );
};
