import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Feed,ChannelDetail,Navbar,SearchFeed,VideoDetail} from './components/index';
const App = () => (
     <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed />}></Route>
        <Route path='/yt' exact element={<Feed />}></Route>
        <Route path='/video/:id' exact element={<VideoDetail />}></Route>
        <Route path='/channel/:id' exact element={<ChannelDetail />}></Route>
        <Route path='/search/:searchTerm' exact element={<SearchFeed />}></Route>
      </Routes>

     </Box>
     </BrowserRouter>
)

export default App
