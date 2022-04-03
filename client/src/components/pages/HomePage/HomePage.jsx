import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Container, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';

// Import components
import CardTask from '../../shared/CardTask/CardTask';

import uuid from 'uuid/v4';

const cardLists = [
  { id: uuid(), title: 'Card1', completed: 12 },
  { id: uuid(), title: 'Card2', completed: 89 },
  { id: uuid(), title: 'Card3', completed: 100 },
  { id: uuid(), title: 'Card4', completed: 50 },
  { id: uuid(), title: 'Card5', completed: 24 },
  { id: uuid(), title: 'Card6', completed: 1 },
  { id: uuid(), title: 'Card7', completed: 20 },
];

const columnsTitle = {
  [uuid()]: {
    name: 'To do',
    items: cardLists,
  },
  [uuid()]: {
    name: 'In Progress',
    items: [],
  },
  [uuid()]: {
    name: 'Completed',
    items: [],
  },
};

const HandleOnDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const getListStyle = (isDraggingOver, droppableStyle) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  width: '100%',
  height: '70vh',
  borderRadius: 13,
  padding: 15,
  overflowY: 'scroll',
  ...droppableStyle,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  margin: '10px 0',
  // change background colour if dragging
  // background: isDragging ? 'lightgreen' : '#ffffff',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const styleColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  margin: '20px',
};

const defaultDate = new Date();

const HomePage = () => {
  const [columns, setColumns] = useState(columnsTitle);
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <DragDropContext onDragEnd={result => HandleOnDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div style={styleColumn} key={columnId}>
                <Typography variant="h6" component="h6" gutterBottom>
                  <h2>{column.name}</h2>
                </Typography>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver, provided.droppableProps.style)}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                  >
                                    <CardTask
                                      completed={item.completed}
                                      isSelected={snapshot.isDragging}
                                      title={item.title}
                                      date={`${defaultDate.toLocaleDateString()}`}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </Stack>
    </Container>
  );
};

// Add Types
getItemStyle.propTypes = {
  isDragging: PropTypes.bool.isRequired,
};

export default HomePage;
