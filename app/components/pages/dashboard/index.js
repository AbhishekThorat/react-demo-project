import React from 'react';
import { ParentLayout } from '../../layouts';
import { Form, Input } from '../../UI';

const Dashboard = () =>
  <ParentLayout>
    <Form>
      <Input type="file" name="pic" accept="image/*" />
    </Form>
  </ParentLayout>

export { Dashboard }
