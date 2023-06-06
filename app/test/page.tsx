'use client';

import { Button } from '@/components/button/button';
import { useToast } from '@/stores/toast';
import React from 'react';

const TestPage = () => {
  const { addToast } = useToast();
  return (
    <div>
      <h1>Test</h1>
      <Button onClick={() => addToast('Test', 'info', 'Second Title')}>
        New Info Notification
      </Button>
      <Button onClick={() => addToast('Test', 'success', 'Second Title')}>
        New Success Notification
      </Button>
      <Button onClick={() => addToast('Test', 'warning', 'Second Title')}>
        New Success Notification
      </Button>
      <Button onClick={() => addToast('Test', 'danger', 'Second Title')}>
        New Danger Notification
      </Button>
    </div>
  );
};

export default TestPage;
