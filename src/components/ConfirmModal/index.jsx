import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ConfirmModal = ({ isModalVisible, handleOk, handleCancel, children }) => {


    return (
        <>
            <Modal title="Confirm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default ConfirmModal