export const BannerSkeleton = () => (
  <div className='banner-swiper max-w-full overflow-hidden border-b-3 border-black-600'>
    <div className='relative swiper-slide'>
      <div className='flex h-full'>
        <div className='hidden sm:block h-full w-4/12'>
          <div className='skeleton-element h-full opacity-70'></div>
        </div>
        <div className='w-full sm:w-4/12 max-h-full h-full w-4/12 border-x-3'>
          <div className='skeleton-element h-full opacity-70'></div>
        </div>
        <div className='hidden sm:block h-full w-4/12'>
          <div className='skeleton-element h-full opacity-70'></div>
        </div>
        <div className='
          absolute bottom-[-3px] sm:bottom-1/2 right-1/2 sm:translate-y-1/2
          translate-x-1/2 py-6 px-4 w-full sm:w-5/12 flex flex-col
          justify-center items-center border-3 border-black-600
          backdrop-blur-sm '
        >
          <div className="skeleton-element w-80 h-10 rounded-xl"></div>
          <div className='skeleton-element w-20 h-8 mt-2 mb-6 rounded-xl'></div>
          <div className='skeleton-element w-28 h-10 rounded-xl'></div>
        </div>
      </div>
    </div>
  </div>
)
