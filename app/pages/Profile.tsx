import Header from '@/components/Header';
import GetProfile from '@/components/GetProfile';


export default function Profile() {
  return (
    <main className="relative">
			<div className='h-auto'>
				<Header />
				<GetProfile />
			</div>
		</main>
  );
}
