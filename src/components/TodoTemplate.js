import React from 'react';
import TodoCreator from './TodoCreator';
import TodoItemList from './TodoItemLIst';
import Palette from './Palette';

import '../style/TodoTemplate.css';

const TodoTemplate = ({
  todos,
  value,
  onChange,
  onCreate,
  onDelete,
  onToggle,
  onEnter,
  onCheck,
  colors,
  onColor,
  color,
}) => {
  return (
    <div className="template">
      <div className="creator">
        <TodoCreator
          value={value}
          onChange={onChange}
          onCreate={onCreate}
          onEnter={onEnter}
          color={color}
        />
        <Palette
          colors={colors}
          onColor={onColor}
        />
      </div>
      <div className="itemlist">
        <TodoItemList
          todos={todos}
          onDelete={onDelete}
          onToggle={onToggle}
          onCheck={onCheck}
          color={color}
        />
      </div>
    </div>
  );
};

export default TodoTemplate;
