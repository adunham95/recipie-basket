import { AccountButton } from '@/components/authButtons';
import Logo, { LogoWide } from '@/components/logo';
import { MarketingHero } from '@/components/marketing/hero';

const companyName = 'Recipe Buggy';

export default function Home() {
  return (
    <div className="bg-white">
      {/* <!-- Header --> */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{companyName}</span>
              <Logo className="sm:hidden h-8 w-auto fill-primary" />
              <LogoWide className="hidden sm:block h-8 w-auto fill-primary" />
            </a>
          </div>

          <div className="flex flex-1 justify-end items-center">
            <AccountButton
              primaryClassName="ml-2 flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              secondaryClassName="text-sm font-semibold leading-6 text-gray-900"
            />
          </div>
        </nav>
      </header>

      <main>
        <MarketingHero
          title="Recipe to grocery faster"
          subtitle="Lorium Ipsum"
          ctaLink="/dashboard"
          ctaTitle="Get Started"
        />

        {/* <!-- Feature section --> */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our app today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla. Ac
                  euismod vel sit maecenas.
                </p>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width="2432"
                height="1442"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Push to deploy.
                    </dt>
                    <dd className="inline">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      aute id magna.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      SSL certificates.
                    </dt>
                    <dd className="inline">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path
                          fillRule="evenodd"
                          d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Database backups.
                    </dt>
                    <dd className="inline">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"></div>
            </div>
          </div>
        </div>

        {/* <!-- Feature section --> */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Push to deploy
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Commodo nec sagittis tortor mauris sed. Turpis tortor quis
                    scelerisque diam id accumsan nullam tempus. Pulvinar etiam
                    lacus volutpat eu. Phasellus praesent ligula sit faucibus.
                  </p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SSL certificates
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Pellentesque enim a commodo malesuada turpis eleifend risus.
                    Facilisis donec placerat sapien consequat tempor fermentum
                    nibh.
                  </p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg
                    className="h-5 w-5 flex-none text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Simple queues
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Pellentesque sit elit congue ante nec amet. Dolor aenean
                    curabitur viverra suspendisse iaculis eget. Nec mollis
                    placerat ultricies euismod ut condimentum.
                  </p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* <!-- Newsletter section --> */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get notified when we’re launching.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor
              incididunt nostrud nulla et culpa.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* <!-- Testimonials section --> */}
        <div className="relative isolate mt-32 sm:mt-56 sm:pt-32">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width="200"
                height="200"
                x="50%"
                y="0"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="0" className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
            />
          </svg>
          <div className="relative">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
              aria-hidden="true"
            >
              <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                  Testimonials
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We have worked with thousands of amazing people
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>
                      “Integer id nunc sit semper purus. Bibendum at lacus ut
                      arcu blandit montes vitae auctor libero. Hac condimentum
                      dignissim nibh vulputate ut nunc. Amet nibh orci mi
                      venenatis blandit vel et proin. Non hendrerit in vel ac
                      diam.”
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">Brenna Goyette</div>
                      <div className="text-gray-600">@brennagoyette</div>
                    </div>
                    <img
                      className="h-10 w-auto flex-none"
                      src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                      alt=""
                    />
                  </figcaption>
                </figure>
                <div className="space-y-8 xl:contents xl:space-y-0">
                  <div className="space-y-8 xl:row-span-2">
                    <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote className="text-gray-900">
                        <p>
                          “Laborum quis quam. Dolorum et ut quod quia. Voluptas
                          numquam delectus nihil. Aut enim doloremque et ipsam.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">Leslie Alexander</div>
                          <div className="text-gray-600">@lesliealexander</div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- More testimonials... --> */}
                  </div>
                  <div className="space-y-8 xl:row-start-1">
                    <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote className="text-gray-900">
                        <p>
                          “Aut reprehenderit voluptatem eum asperiores beatae
                          id. Iure molestiae ipsam ut officia rem nulla
                          blanditiis.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">Lindsay Walton</div>
                          <div className="text-gray-600">@lindsaywalton</div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- More testimonials... --> */}
                  </div>
                </div>
                <div className="space-y-8 xl:contents xl:space-y-0">
                  <div className="space-y-8 xl:row-start-1">
                    <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote className="text-gray-900">
                        <p>
                          “Voluptas quos itaque ipsam in voluptatem est. Iste
                          eos blanditiis repudiandae. Earum deserunt enim
                          molestiae ipsum perferendis recusandae saepe
                          corrupti.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">Tom Cook</div>
                          <div className="text-gray-600">@tomcook</div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- More testimonials... --> */}
                  </div>
                  <div className="space-y-8 xl:row-span-2">
                    <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote className="text-gray-900">
                        <p>
                          “Molestias ea earum quos nostrum doloremque sed.
                          Quaerat quasi aut velit incidunt excepturi rerum
                          voluptatem minus harum.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">Leonard Krasner</div>
                          <div className="text-gray-600">@leonardkrasner</div>
                        </div>
                      </figcaption>
                    </figure>

                    {/* <!-- More testimonials... --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer
        className="mt-32 bg-gray-900 sm:mt-56"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:pt-24 lg:px-8">
          <div className=" lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-56 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2020 {companyName}, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
