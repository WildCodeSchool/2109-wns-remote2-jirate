import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Container, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import components
import CardTask from '../../shared/CardTask/CardTask';

// Styles
const BoxContainer = styled(Box)(() => ({
  backgroundColor: '#E3E6EB',
  minHeight: '80vh',
  height: '80vh',
  overflowY: 'scroll',
  width: '32%',
  borderRadius: 13,
  padding: 15,
}));

const cardList = [
  { id: 'task1', title: 'Card1' },
  { id: 'task2', title: 'Card2' },
  { id: 'task3', title: 'Card3' },
  { id: 'task4', title: 'Card4' },
  { id: 'task5', title: 'Card5' },
  { id: 'task 6', title: 'Card6' },
];

const HomePage = () => {
  const [tasks, updateTasks] = useState(cardList);

  const handleOnDragEnd = res => {
    if (!res.destination) return;

    const items = Array.from(tasks);
    const [reorderItems] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderItems);

    updateTasks(items);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : '#ffffff',
    padding: 5,

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    width: 250,
  });

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" mb={5}>
        <BoxContainer>
          <Typography variant="h5" component="h5" gutterBottom>
            To Do
          </Typography>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="ContainerTasks">
              {(provided, snapshot) => (
                <div className="ContainerTasks" {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map(({ id, title }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                          >
                            <CardTask title={title} />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </BoxContainer>
        <DragDropContext>
          <BoxContainer>
            <Typography variant="h5" component="h5" gutterBottom>
              In Progress
            </Typography>
          </BoxContainer>
        </DragDropContext>
        <DragDropContext>
          <BoxContainer>
            <Typography variant="h5" component="h5" gutterBottom>
              Completed
            </Typography>
          </BoxContainer>
        </DragDropContext>
      </Stack>
    </Container>
  );
};

export default HomePage;
