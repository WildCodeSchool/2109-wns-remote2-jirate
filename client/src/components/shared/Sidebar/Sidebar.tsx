// import React, { useEffect } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// import { makeStyles } from '@material-ui/core';
// import { MHidden } from './MHidden';



// // Import Icons
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import ListIcon from '@mui/icons-material/List';


// const RootStyle = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('lg')]: {
//     flexShrink: 0,
//     width: 280
//   }
// }));

// interface DashboardSidebar {
//   isOpenSidebar: boolean;
//   onCloseSidebar: boolean;
// }

// const Sidebar = ({ isOpenSidebar, onCloseSidebar }: DashboardSidebar) => {
//   const { pathname } = useLocation();
//   const classes = useStyles()

//   useEffect(() => {
//     if (isOpenSidebar) {
//       onCloseSidebar();
//     }
//   }, [pathname]);


//   const renderContent = (
//     <Box sx={{ height: '100%', overflow: "scroll" }}>
//       <Box sx={{ px: 2.5, py: 3 }}>
//         <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
//           <p>logo</p>  // add picture logo
//         </Box>
//       </Box>


//       <NavSection />

//       <Box sx={{ flexGrow: 1 }} />

//     </Box>
//   );

//   return (
//     <RootStyle>
//       <MHidden width="lgUp">
//         <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: 280 } }}>
//           {renderContent}
//         </Drawer>
//       </MHidden>

//       <MHidden width="lgDown">
//         <Drawer open variant="persistent" PaperProps={{ sx: { width: 280, bgcolor: 'background.default' } }}>
//           {renderContent}
//         </Drawer>
//       </MHidden>
//     </RootStyle>
//   )


// }


// const useStyles = makeStyles({
//   iconLink: {
//   },
// })

// // backgroundColor: "rgba(154, 154, 154, 0.2) !important",
// //   borderLeft: "5px solid #0047FC !important",

// export default Sidebar;



// // const list = (anchor: Anchor) => (
// //   <Box style={{ width: 80 }} role="presentation" >
// //     <Stack direction="row" spacing={2}>
// //       <Avatar
// //         variant="square"
// //         alt="Remy Sharp"
// //         src="/static/images/avatar/1.jpg"
// //         sx={{ width: 54, height: 54 }}
// //       />
// //     </Stack>
// //     <MenuList>
// //     <ListItemIcon>
// //           <ContentCut fontSize="small" />
// //         </ListItemIcon>

// //       {[<BiCalendarAlt className="" size={30} color={"#B0B0B0"} />, <BiCalendarAlt size={30} color={"#B0B0B0"} />].map((text, index) => (
// //         <ListItem button className={classes.iconLink}>
// //           <ListItemText style={{ textAlign: "center" }} primary={text} />
// //         </ListItem>
// //       ))}
// //     </MenuList>
// //   </Box>
// // );

// // return (
// //   <div>
// //     {(['left'] as const).map((anchor) => (
// //       <React.Fragment key={anchor}>
// //         <Drawer
// //           hideBackdrop={true}
// //           open={true}
// //         >
// //           {list(anchor)}
// //         </Drawer>
// //       </React.Fragment>
// //     ))}
// //   </div>
// // );

export const pfpfpfpf = 4