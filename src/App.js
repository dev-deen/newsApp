import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Container from './components/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({api_key, pageSize, category}) => {
  
  const [page, setPage] = useState(1)

  const onPageChange = (newPage, callback) => {
    setPage(newPage, callback);
  };

    return (
      <Router>
        <div>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Container key="general" api_key={api_key} category={category} pageSize={pageSize} page={page} onPageChange={onPageChange}/>}/>
            <Route path="/business" element={<Container key="business" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="business"/>}/>
            <Route path="/entertainment" element={<Container key="entertainment" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="entertainment"/>}/>
            <Route path="/health" element={<Container key="health" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="health"/>}/>
            <Route path="/science" element={<Container key="science" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="science"/>}/>
            <Route path="/sports" element={<Container key="sports" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="sports"/>}/>
            <Route path="/technology" element={<Container key="technology" api_key={api_key} pageSize={pageSize} page={page} onPageChange={onPageChange} category="technology"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }

App.defaultProps = {
  api_key: '43ed82eb8a7c41d59b1bd94de06673f5',
  pageSize: 10,
  category: 'general'
};

App.propTypes = {
  api_key: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default App;
