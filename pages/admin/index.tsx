import AdminLayout from '@/infrastructure/common/layout/admin/MainLayout'
import React from 'react'

const AdminPage = () => {
    return (
        <AdminLayout
            breadcrumb={"Trang quản trị"}
            title={""}
            redirect={"/"}
        ></AdminLayout>
    )
}

export default AdminPage