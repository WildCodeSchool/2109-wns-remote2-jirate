import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Container, Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// // // Import components
import CardTask from '../../shared/CardTask/CardTask';

import uuid from "uuid/v4";


const cardLists = [
    { id: uuid(), title: "Card1" },
    { id: uuid(), title: "Card2" },
    { id: uuid(), title: "Card3" },
    { id: uuid(), title: "Card4" },
  ];

const columnsTitle = {
  [uuid()]: {
    name: "To do",
    items: cardLists
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Completed",
    items: []
  }
};

const BoxContainer = styled(Container)(() => ({
  backgroundColor: '#E3E6EB',
  minHeight: '80vh',
  height: '80vh',
  overflowY: 'scroll',
  width: '32%',
  borderRadius: 13,
  padding: 15,
  // display: 'contents'
}));


// Styles
// const BoxContainer = styled(Box)(() => ({
//   backgroundColor: '#E3E6EB',
//   minHeight: '80vh',
//   height: '80vh',
//   overflowY: 'scroll',
//   width: '32%',
//   borderRadius: 13,
//   padding: 15,
//   display: 'contents'
// }));

// functions HandleOnDragEnd, getListStyle, getItemStyle

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
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
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
        items: copiedItems
      }
    });
  }
};

const getListStyle = (isDraggingOver, droppableStyle) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding : 4,
  width: 250,
  minHeight: '80vh',
  ...droppableStyle
});


const getItemStyle = (isDragging, draggableStyle) => ({
// some basic styles to make the items look a bit nicer
  userSelect: 'none',
// change background colour if dragging
  background: isDragging ? 'lightgreen' : '#ffffff',
  padding: 5,

// styles we need to apply on draggables
  ...draggableStyle,
});


function HomePage() {
  const [columns, setColumns] = useState(columnsTitle);
  return (
    // <Container >
       <BoxContainer> 
       <Stack direction="row" justifyContent="space-between" mb={5}>
          <DragDropContext onDragEnd={result => HandleOnDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <Typography variant="h5" component="h5" gutterBottom>
                      <h2>{column.name}</h2>
                  </Typography>
                  <div style={{ margin: 8 }}>
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
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                      >
                                        <CardTask title = {cardLists.title}/>
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
                </div>
              );
            })}
          </DragDropContext>
      </Stack>
      </BoxContainer> 
    // </Container>
  );
}

export default HomePage;
