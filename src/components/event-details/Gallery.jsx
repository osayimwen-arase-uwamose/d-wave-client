import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Images,
  X,
} from "lucide-react";

function Gallery({ event }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const photos = Array.isArray(event?.galleryPhotos)
    ? event.galleryPhotos.filter(
        (photo) =>
          typeof photo?.galleryPhotoUrl === "string" &&
          photo.galleryPhotoUrl.trim() !== ""
      )
    : [];

  const viewerIsOpen =
    activeIndex !== null &&
    activeIndex >= 0 &&
    activeIndex < photos.length;

  const activePhoto = viewerIsOpen ? photos[activeIndex] : null;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null || photos.length === 0) {
        return currentIndex;
      }

      return (currentIndex - 1 + photos.length) % photos.length;
    });
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null || photos.length === 0) {
        return currentIndex;
      }

      return (currentIndex + 1) % photos.length;
    });
  };

  const closeViewer = () => setActiveIndex(null);

  useEffect(() => {
    if (!viewerIsOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewerIsOpen, photos.length]);

  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-sky-600" />

                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700">
                  The memories
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Visual recap
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                A closer look at the moments, atmosphere, and experiences
                captured at D-Wave events.
              </p>
            </div>

            {photos.length > 0 && (
              <p className="shrink-0 text-sm font-semibold text-slate-500">
                {photos.length} {photos.length === 1 ? "photo" : "photos"}
              </p>
            )}
          </div>

          {photos.length === 0 ? (
            <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Images size={30} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                The memories are on their way!
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Event photos will be available here soon. Check back to relive the highlights and experience the moments you might have missed.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <button
                  key={photo.publicId || photo.galleryPhotoUrl}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View photo ${index + 1}${
                    photo.caption ? `: ${photo.caption}` : ""
                  }`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4"
                >
                  <img
                    src={photo.galleryPhotoUrl}
                    alt={
                      photo.caption ||
                      `${event?.title || "Event"} gallery photo ${index + 1}`
                    }
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div className="min-w-0">
                      {photo.caption && (
                        <p className="line-clamp-2 text-sm font-bold leading-6 text-white">
                          {photo.caption}
                        </p>
                      )}

                      <p className="mt-1 text-xs font-medium text-white/75">
                        View photo
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-slate-900">
                      <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {viewerIsOpen && activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Event photo viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeViewer();
            }
          }}
        >
          <button
            type="button"
            onClick={closeViewer}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:top-7"
          >
            <X size={22} aria-hidden="true" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-7 sm:h-12 sm:w-12"
              >
                <ArrowLeft size={21} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:h-12 sm:w-12"
              >
                <ArrowRight size={21} aria-hidden="true" />
              </button>
            </>
          )}

          <div className="flex max-h-full w-full max-w-6xl flex-col items-center">
            <img
              key={activePhoto.galleryPhotoUrl}
              src={activePhoto.galleryPhotoUrl}
              alt={
                activePhoto.caption ||
                `${event?.title || "Event"} gallery photo ${activeIndex + 1}`
              }
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 max-w-2xl text-center">
              {activePhoto.caption && (
                <p className="font-semibold text-white">
                  {activePhoto.caption}
                </p>
              )}

              <p className="mt-2 text-sm text-white/60">
                {activeIndex + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
