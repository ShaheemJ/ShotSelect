import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 shadow-sm">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/images/shotselectlogo.png"
            alt="NBA Logo"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-bold text-black font-inter tracking-tight">
            ShotSelect
          </h1>
        </div>
        <Link href="https://github.com/ShaheemJ/shotselect" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 hover:text-gray-900 font-inter font-bold transition-colors">GitHub Code ---&gt;</span>
            <Image
              src="/images/github-mark.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}