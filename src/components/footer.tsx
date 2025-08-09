import React from 'react';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground/60 py-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pritam Kumar Mani. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
