import React from 'react';

interface ISlideoverProps {
  isOpen?: boolean;
  onCloseClick?: () => void;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  actionSlot?: React.ReactNode;
  containerClassName?: string;
}

const SlideOver = (props: ISlideoverProps) => {
  const {
    isOpen,
    onCloseClick,
    title,
    subTitle,
    children,
    actionSlot,
    containerClassName,
  } = props;
  console.log({ isOpen });
  return (
    <dialog
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      open={isOpen}
    >
      <div
        className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16`}
      >
        <div
          className={`pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
            <div className="h-0 flex-1 overflow-y-auto">
              <div className="bg-primary px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-base font-semibold leading-6 text-white"
                    id="slide-over-title"
                  >
                    {title}
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-primary text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={onCloseClick}
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {subTitle && (
                  <div className="mt-1">
                    <p className="text-sm text-primary-extra-light">
                      {subTitle}
                    </p>
                  </div>
                )}
              </div>
              <div className={containerClassName}>{children}</div>
            </div>
            {actionSlot && (
              <div className="flex flex-shrink-0 justify-end px-4 py-4">
                {actionSlot}
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SlideOver;
