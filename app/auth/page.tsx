'use client';
import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState('login');
  switch (view) {
    case 'login':
      return 'login';

    default:
      return 'default';
  }
}
