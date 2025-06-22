import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import Constants from '@/core/common/constants';

const { SubMenu } = Menu;

const data = [
    {
        "id": 1,
        "name": "Phụ kiện nội thất",
        "description": "Bao gồm thảm lót sàn, bọc ghế, vô lăng, màn hình android..."
    },
    {
        "id": 2,
        "name": "Phụ kiện ngoại thất",
        "description": "Gương chiếu hậu, ốp tay cửa, cản trước/sau, vè che mưa..."
    },
    {
        "id": 3,
        "name": "Thiết bị điện - điện tử",
        "description": "Camera hành trình, cảm biến áp suất lốp, HUD, sạc nhanh USB..."
    },
    {
        "id": 4,
        "name": "Âm thanh - giải trí",
        "description": "Loa sub, màn hình DVD, ampli, dàn karaoke trên xe..."
    },
    {
        "id": 5,
        "name": "Đèn xe & chiếu sáng",
        "description": "Đèn LED, đèn bi xenon, đèn pha, đèn hậu, đèn xi nhan..."
    },
    {
        "id": 6,
        "name": "Hệ thống an toàn",
        "description": "Camera 360, camera lùi, cảm biến lùi, thiết bị định vị GPS..."
    },
    {
        "id": 7,
        "name": "Dụng cụ chăm sóc xe",
        "description": "Máy hút bụi, máy bơm lốp, khăn lau xe, dung dịch rửa kính..."
    },
    {
        "id": 8,
        "name": "Thiết bị nâng hạ & cứu hộ",
        "description": "Kích nâng, dây kéo, bình cứu hỏa, bộ sửa lốp khẩn cấp..."
    },
    {
        "id": 9,
        "name": "Pin - Ắc quy & phụ kiện nguồn",
        "description": "Ắc quy, bộ sạc, pin dự phòng cho thiết bị trên xe..."
    },
    {
        "id": 10,
        "name": "Hệ thống lọc và điều hòa",
        "description": "Lọc gió điều hòa, lọc gió động cơ, máy lọc không khí..."
    },
    {
        "id": 11,
        "name": "Thiết bị điều khiển từ xa",
        "description": "Khoá thông minh, khởi động từ xa, điều khiển cửa kính..."
    },
    {
        "id": 12,
        "name": "Phụ tùng thay thế cơ bản",
        "description": "Gạt mưa, bugi, lọc dầu, má phanh, nhớt máy, dây curoa..."
    },
]
const PanelCategories = () => {


    return (
        <Menu
            mode="inline"
            // openKeys={() => { }}
            onOpenChange={() => { }}>
            {data.map(category => (
                <Menu.Item key={category.id}>
                    <a href={`/shop?category=${category.id}`}>
                        {category.name}
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default PanelCategories;
