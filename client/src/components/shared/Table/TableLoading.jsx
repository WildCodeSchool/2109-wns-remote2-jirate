import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Card from '@mui/material/Card';
import TableToolBar from './TableToolBar';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Scrollbar from '../../utils/Scrollbar/Scrollbar';

const TableComponentLoading = () => {
  return (
    <Card>
      <TableToolBar />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <TableBody>
              {[0, 1, 2, 3, 4].map(index => {
                return (
                  <Box
                    key={index}
                    sx={{
                      height: '77px',
                      width: '100%',
                      padding: '0 25px',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(241, 243, 244, 1)',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Skeleton animation="wave" variant="cicular" sx={{ margin: '1px 0' }} width={27} height={27} />
                    <Skeleton animation="wave" width={135} />
                    <Skeleton animation="wave" width={135} />
                    <Skeleton animation="wave" width={135} />
                  </Box>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
};

export default TableComponentLoading;
