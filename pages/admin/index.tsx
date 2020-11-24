import React from 'react';
import AdminLoginForm from '../../components/admin-login-form';
import LayoutAnimated from '../../components/utils/layout-animated';

interface Props {}

const Admin: React.FC<Props> = ({}) => {
  return (
    <LayoutAnimated>
      <AdminLoginForm />
    </LayoutAnimated>
  );
};

export default Admin;
