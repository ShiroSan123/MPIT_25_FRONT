'use client';

import Hero from '@/components/Hero'
import Header from '@/components/Header';
import { Mini1 } from '@/components/Mini1';

export default function Home() {
  return (
    <main className="relative">
			<div className='h-auto'>
				<Header />
				<Hero />
			</div>
			<Mini1 />
		</main>
  );
}
