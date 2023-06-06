'use client';
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// eslint-disable-next-line react/prop-types
export function ClientOnlyPortal({ children }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.body;
    setMounted(true);
  }, []);

  return mounted ? createPortal(children, ref.current) : null;
}
