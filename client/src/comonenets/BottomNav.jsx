function BottomNav() {
  return (
    <div className="fixed flex   items-center justify-center bottom-0  w-screen bg-stone-900 h-[80px] sm:hidden">
      <div className="text-white items-center flex w-full justify-around text-2xl">
        <div className="flex items-center flex-col">
          <i className="ri-home-line"></i>
          <span className="text-sm">Home</span>
        </div>
        <div className="flex items-center flex-col">
          <i className="ri-seo-line"></i>
          <span className="text-sm">Explore</span>
        </div>
        <div className="flex items-center flex-col">
          <i className="ri-bookmark-line"></i>
          <span className="text-sm">Saved</span>
        </div>

        <div className="flex items-center flex-col">
          <i className="ri-image-edit-line"></i>
          <span className="text-sm">Create</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
