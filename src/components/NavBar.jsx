import { useEffect, useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const media = window.innerWidth >= 768;
  console.log(media);

  useEffect(() => {}, [media]);

  function handleMenu() {
    setIsMenuOpen((show) => !show);
  }
  return (
    <div className="flex items-center justify-between border border-yellow-600 px-6 py-4">
      <div className="logo w-[4rem]  text-center text-2xl font-extrabold ">
        Logo
      </div>
      {media ||
        (isMenuOpen && (
          <div className="flex items-center space-x-4">
            <div className="px-3">About</div>
            <div className="px-3">Projects</div>
            <div className="px-3">Contact</div>
          </div>
        ))}
      <button className="md:hidden" onClick={handleMenu}>
        Menu
      </button>
    </div>
  );
}

export default NavBar;
