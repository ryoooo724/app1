import React, { MouseEventHandler } from 'react';

interface FortuneIconProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const FortuneIcon = ({ onClick }: FortuneIconProps) => {
  return (
    <div>
      {/* アイコンのUIをここに記述 */}
      <button onClick={onClick}>クリックして運勢を表示</button>
    </div>
  );
};

export default FortuneIcon;
