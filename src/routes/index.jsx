import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

function index() {
    return (
        <Routes>
            <Route path="/:catagory/search/:keyword" element={<Catalog />} />
            <Route path="/:catagory/:id" element={<Detail />} />
            <Route path="/:catagory" element={<Catalog />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default index;
