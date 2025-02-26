import Header from '@/components/Header';
import React from 'react';


export default function NoPage() {
  return (
    <main className="relative">
			<div className='h-auto'>
				<Header />
				<h1 className='text-center'>Error 404: Not found</h1>
			</div>
		</main>
  );
}
