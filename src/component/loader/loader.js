import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
export default function Loader() {
    const isLoading = useSelector(state => state.ticket.loading);

    if (!isLoading) return null;

    return (
            <Spin size="large" />
    );
}