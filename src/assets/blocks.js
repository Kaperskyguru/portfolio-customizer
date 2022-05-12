export const componentBlocks = [
  // Navigation
  {
    category: "Navigation",
    id: "nav__1", // id is mandatory
    label: "<b>Nav 1</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a href="#_" class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">tails.</a>
    
            <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="block">Home</span>
                    <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                        <span x-show="hover" class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0" style="display: none;"></span>
                    </span>
                </a>
                <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="block">Features</span>
                    <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                        <span x-show="hover" class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0" style="display: none;"></span>
                    </span>
                </a>
                <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="block">Pricing</span>
                    <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                        <span x-show="hover" class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0" style="display: none;"></span>
                    </span>
                </a>
                <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="block">Blog</span>
                    <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                        <span x-show="hover" class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0" style="display: none;"></span>
                    </span>
                </a>
            </nav>
    
            <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    Sign in
                </a>
                <span class="inline-flex rounded-md shadow-sm">
                    <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Sign up
                    </a>
                </span>
            </div>
        </div>
    </section>
    `,
  },

  {
    category: "Navigation",
    id: "nav__2", // id is mandatory
    label: "<b>navbar 2</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="w-full px-8 text-gray-700 bg-white">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div class="relative flex flex-col md:flex-row">
                <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">tails<span class="text-indigo-600">.</span></span>
                </a>
                <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                </nav>
            </div>
    
            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                    Sign in
                </a>
                <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    Sign up
                </a>
            </div>
        </div>
    </section>
    `,
  },
  // Headers

  {
    category: "Header",
    id: "header__1",
    label: "<b>header 1</>",
    attributes: { class: "gjs-block-sectiion" },
    content: `
      <!-- Section 1 -->
      <section class="w-full px-6 pb-12 antialiased bg-white">
          <div class="mx-auto max-w-7xl">
      
              <nav class="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
                  <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                      <div class="flex items-center justify-start w-1/4 h-full pr-4">
                          <a href="#_" class="inline-block py-4 md:py-0">
                              <span class="p-1 text-xl font-black leading-none text-gray-900"><span>tails</span><span class="text-indigo-600">.</span></span>
                          </a>
                      </div>
                      <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                          <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                              <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span class="text-indigo-600">.</span></a>
                              <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                  <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                                  <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                                  <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                                  <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Contact</a>
                                  <a href="#_" class="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                                      <svg class="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                  </a>
                              </div>
                              <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                  <a href="#" class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
                                  <a href="#_" class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Sign Up</a>
                              </div>
                          </div>
                      </div>
                      <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                          <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                              <path d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                          <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </div>
                  </div>
              </nav>
      
              <!-- Main Hero Content -->
              <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                  <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block">Start Crafting Your</span> <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Next Great Idea</span></h1>
                  <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
                  <div class="flex flex-col items-center mt-12 text-center">
                      <span class="relative inline-flex w-full md:w-auto">
                          <a href="#_" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                              Purchase Now
                          </a>
                          <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
                      </span>
                      <a href="#" class="mt-3 text-sm text-indigo-500">Learn More</a>
                  </div>
              </div>
              <!-- End Main Hero Content -->
      
          </div>
      </section>
      `,
  },
  {
    category: "Header",
    id: "header__2", // id is mandatory
    label: "<b>header</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="w-full px-3 antialiased bg-indigo-600 lg:px-6">
        <div class="mx-auto max-w-7xl">
            <nav class="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
                <div class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                    <a href="#_" class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                        <span class="p-1 text-xl font-black leading-none text-white select-none"><span>tails</span><span class="text-indigo-300">.</span></span>
                    </a>
                    <div class="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex': showMenu, 'hidden': !showMenu }">
                        <div class="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                            <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                <a href="#" class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
                                <a href="#" class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</a>
                                <a href="#" class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Blog</a>
                                <a href="#" class="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Contact</a>
                            </div>
                            <div class="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                                <a href="#_" class="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
                                <a href="#_" class="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div @click="showMenu = !showMenu" class="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10" :class="{ 'text-gray-400': showMenu, 'text-gray-100': !showMenu }">
                        <svg class="w-6 h-6" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg class="w-6 h-6" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
            </nav>
            <div class="container py-32 mx-auto text-center sm:px-4">
    
                <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Simplify the way you</span> <span class="relative inline-block mt-3 text-transparent text-white">design websites</span></h1>
                <div class="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!</div>
                <div class="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
                    <input type="text" name="email" placeholder="Email Address" class="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none">
                    <span class="relative top-0 right-0 block">
                        <button type="button" class="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
                            Sign Up
                        </button>
                    </span>
                </div>
                <div class="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
            </div>
        </div>
    </section>
    `,
  },

  // Content
  {
    category: "Content",
    id: "content__1", // id is mandatory
    label: "<b>content</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
            <div class="flex flex-col w-full md:flex-row">
    
                <!-- Top Text -->
                <div class="flex justify-between">
                    <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                        Crafting
                        <span>Powerful</span>
                        <span>Experiences</span>
                    </h1>
                </div>
                <!-- Right Image -->
                <div class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                    <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" class="object-cover mt-3 mr-5 h-80 lg:h-96">
                </div>
            </div>
    
            <!-- Separator -->
            <div class="my-16 border-b border-gray-300 lg:my-24"></div>
    
            <!-- Bottom Text -->
            <h2 class="text-left text-gray-500 xl:text-xl">
                Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
            </h2>
        </div>
    </section>
    `,
  },

  {
    category: "Content",
    id: "content__2", // id is mandatory
    label: "<b>content</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
    
            <!-- Image -->
            <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                <img src="https://cdn.devdojo.com/images/december2020/productivity.png" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
            </div>
    
            <!-- Content -->
            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Boost Productivity
                </h2>
                <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                    Build an atmosphere that creates productivity in your organization and your company culture.
                </p>
                <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Maximize productivity and growth
                    </li>
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Speed past your competition
                    </li>
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
                    </li>
                </ul>
            </div>
            <!-- End  Content -->
        </div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
    
            <!-- Content -->
            <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Automated Tasks
                </h2>
                <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                    Save time and money with our revolutionary services. We are the leaders in the industry.
                </p>
                <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Automated task management workflow
                    </li>
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Detailed analytics for your data
                    </li>
                    <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Some awesome integrations
                    </li>
                </ul>
            </div>
            <!-- End  Content -->
    
            <!-- Image -->
            <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                <img src="https://cdn.devdojo.com/images/december2020/settings.png" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
            </div>
        </div>
    </section>
    `,
  },
  // Heroes

  {
    category: "Heroes",
    id: "heroes__1", // id is mandatory
    label: "<b>heroes</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="px-2 py-32 bg-white md:px-0">
      <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div class="flex flex-wrap items-center sm:-mx-3">
          <div class="w-full md:w-1/2 md:px-3">
            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span class="block xl:inline">Beautiful Pages to</span>
                <span class="block text-indigo-600 xl:inline">Tell Your Story!</span>
              </h1>
              <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
              <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                  Try It Free
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg">
              </div>
          </div>
        </div>
      </div>
    </section>
    `,
  },

  {
    category: "Heroes",
    id: "heroes__2", // id is mandatory
    label: "<b>heroes</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="px-2 pt-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                <span class="block">Level Up Your <span class="block mt-1 text-purple-500 lg:inline lg:mt-0">Landing Pages</span></span>
            </h1>
            <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                Award winning pages that will take your game to the next level!
            </p>
            <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
                <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Learn More
                </a>
            </div>
        </div>
        <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.png">
        </div>
    </section>
    `,
  },

  //   features

  {
    category: "Features",
    id: "features__1", // id is mandatory
    label: "<b>feature</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="py-20 bg-white">
        <div class="container max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold tracking-tight text-center">Our Features</h2>
            <p class="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
            <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
    
                <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Certifications</h4>
                    <p class="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
                </div>
    
                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Notifications</h4>
                    <p class="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
                </div>
    
                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Bundles</h4>
                    <p class="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
                </div>
    
                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Developer Tools</h4>
                    <p class="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
                </div>
    
                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Building Blocks</h4>
                    <p class="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
                </div>
    
                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                    <div class="p-3 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                    </div>
                    <h4 class="text-xl font-medium text-gray-700">Coupons</h4>
                    <p class="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
                </div>
    
            </div>
        </div>
    </section>
    `,
  },

  {
    category: "Features",
    id: "features__2", // id is mandatory
    label: "<b>feature</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="py-20 bg-gray-50">
      <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div class="flex flex-wrap items-center -mx-3">
          <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div class="w-full lg:max-w-md">
              <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>
              <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to build a business of your own. Our tools will help you with the following:</p>
              <ul>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  <span class="font-medium text-gray-500">Faster Processing and Delivery</span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                  <span class="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span class="font-medium text-gray-500">100% Protection and Security for Your App</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"></div>
        </div>
      </div>
    </section>
    `,
  },

  // Blog
  {
    category: "Blog",
    id: "blog__1", // id is mandatory
    label: "<b>blog</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="bg-white">
        <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
    
            <div class="flex flex-col items-center sm:px-5 md:flex-row">
                <div class="w-full md:w-1/2">
                    <a href="#_" class="block">
                        <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg">
                    </a>
                </div>
                <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                    <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                        <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span>Featured</span>
                        </div>
                        <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Templates. Sweet Designs.</a></h1>
                        <p class="pt-2 text-sm font-medium">by <a href="#_" class="mr-1 underline">John Doe</a> · <span class="mx-1">April 23rd, 2021</span> · <span class="mx-1 text-gray-600">5 min. read</span></p>
                    </div>
                </div>
            </div>
    
            <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg">
                    </a>
                    <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Lifestyle</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
                    <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workout.jpg">
                    </a>
                    <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Health</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Healther Version of Yourself</h2>
                    <p class="text-sm text-gray-500">If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Fred Jones</a> · <span class="mx-1">April 10, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/food.jpg">
                    </a>
                    <div class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Food</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Enjoy the Meals of the Kings</h2>
                    <p class="text-sm text-gray-500">Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mike Roberts</a> · <span class="mx-1">April 6, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/books.jpg">
                    </a>
                    <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Motivation</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Writing for Success</h2>
                    <p class="text-sm text-gray-500">Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Tom Johnson</a> · <span class="mx-1">May 25, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/clock.jpg">
                    </a>
                    <div class="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Business</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Simple Time Management</h2>
                    <p class="text-sm text-gray-500">Managing your time can make the difference between getting ahead in life or staying exactly where you are.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Scott Reedman</a> · <span class="mx-1">May 18, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
                <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/lemons.jpg">
                    </a>
                    <div class="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Nutrition</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Fruits Life</h2>
                    <p class="text-sm text-gray-500">Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Jake Caldwell</a> · <span class="mx-1">May 15, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
    
            </div>
        </div>
    </section>
    `,
  },
  {
    category: "Blog",
    id: "blog__2", // id is mandatory
    label: "<b>blog</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="relative w-full bg-white">
        <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
    
            <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">The Project Blog</a></h1>
            <p class="text-lg font-medium text-gray-500 sm:text-2xl">Designs and layouts to help you with your app.</p>
            <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg')">
                    </a>
                    <div class="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                        <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Resources</a>
                        <h2 class="mb-5 text-5xl font-bold"><a href="#_">Refreshing Designs</a></h2>
                        <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>
    
                    </div>
                </div>
    
                <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/orange.jpg')">
                    </a>
                    <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                        <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Lifestyle</a>
                        <h2 class="mb-5 text-5xl font-bold"><a href="#_">Healthier Lifestyle</a></h2>
                        <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">Living a healthier lifestyle will help with your productivity and your mind-set.</p>
    
                    </div>
                </div>
    
                <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/gbc.jpg')"></a>
                    <div class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                        <a href="#_" class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Entertainment</a>
                        <h2 class="mb-5 text-5xl font-bold"><a href="#_">Gaming Evolution</a></h2>
                        <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">Learn about the evolution of gaming and how it started a revolution.</p>
    
                    </div>
                </div>
    
                <div class="grid grid-cols-12 col-span-12 gap-7">
                    <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                        <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                            <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg">
                        </a>
                        <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                            <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                <span>Inspiration</span>
                            </div>
                            <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Best Workstations of the Year</a></h2>
                            <p class="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                        </div>
                    </div>
    
                    <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                        <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                            <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/snacks.jpg">
                        </a>
                        <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                            <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                <span>Food</span>
                            </div>
                            <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Eating for Productivity</a></h2>
                            <p class="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
                        </div>
                    </div>
    
                    <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                        <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                            <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/book-design.jpg">
                        </a>
                        <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                            <div class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                <span>Resources</span>
                            </div>
                            <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">A Design Mind-set</a></h2>
                            <p class="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </section>
    `,
  },

  //   testimonials
  {
    category: "Testimonials",
    id: "Testimonials__1", // id is mandatory
    label: "<b>Testimonial</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div class="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
            <div class="flex flex-col items-center lg:flex-row">
                <div class="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                    <p class="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our product</p>
                    <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
                    <p class="my-6 text-lg text-gray-600">Don't just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                    <a href="#_" class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">View Case Studies</a>
                </div>
                <div class="w-full lg:w-1/2">
                    <blockquote class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                        <div class="flex flex-col pr-8">
                            <div class="relative pl-12">
                                <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                </svg>
                                <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Awesome product! And the customer service is exceptionally well.</p>
                            </div>
    
                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                                Jane Cooper
                                <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                            </h3>
                        </div>
                        <img class="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                    </blockquote>
                    <blockquote class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                        <div class="flex flex-col pr-10">
                            <div class="relative pl-12">
                                <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                </svg>
                                <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                            </div>
                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                                John Doe
                                <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                            </h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                        </div>
                        <img class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                    </blockquote>
                    <blockquote class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                        <div class="flex flex-col pr-10">
                            <div class="relative pl-12">
                                <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                                </svg>
                                <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                            </div>
    
                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                                John Smith
                                <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                            </h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                        </div>
                        <img class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
    `,
  },
  {
    category: "Testimonials",
    id: "Testimonials__2", // id is mandatory
    label: "<b>Testimonial</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="flex items-center justify-center py-20 bg-white min-w-screen">
        <div class="px-16 bg-white">
            <div class="container flex flex-col items-start mx-auto lg:items-center">
                <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>
    
    
                <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                    </path>
                </svg>
                    See what others are saying</h2>
                    <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>
    
                <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                    <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                        <div class="flex items-center justify-center">
                            <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" class="object-cover w-full h-full">
                            </div>
                            <div class="flex flex-col items-start justify-center">
                                <h4 class="font-bold text-gray-800">John Doe</h4>
                                <p class="text-gray-600">CEO of Something</p>
                            </div>
                        </div>
                        <blockquote class="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                        <div class="flex items-center justify-center">
                            <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" class="object-cover w-full h-full">
                            </div>
                            <div class="flex flex-col items-start justify-center">
                                <h4 class="font-bold text-gray-800">Jane Doe</h4>
                                <p class="text-gray-600">CTO of Business</p>
                            </div>
                        </div>
                        <blockquote class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                            easier.
                            Thanks for making such a great product."</blockquote>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                        <div class="flex items-center justify-center">
                            <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" class="object-cover w-full h-full">
                            </div>
                            <div class="flex flex-col items-start justify-center">
                                <h4 class="font-bold text-gray-800">John Smith</h4>
                                <p class="text-gray-600">Creator of Stuff</p>
                            </div>
                        </div>
                        <blockquote class="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                            looking
                            for. I would highly recommend this to anyone."</blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
  },

  // faq
  {
    category: "FAQ",
    id: "faq__1", // id is mandatory
    label: "<b>faq</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: ``,
  },
  {
    category: "FAQ",
    id: "faq__2", // id is mandatory
    label: "<b>faq</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: ``,
  },

  // pricing
  {
    category: "Pricing",
    id: "pricing__1", // id is mandatory
    label: "<b>pricing</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                    Simple, Transparent Pricing
                </h2>
                <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
                    Pricing to fit the needs of any companie size.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                <!-- Price 1 -->
                <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Starter
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $5
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for Startups and Small Companies
                    </p>
                    <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Automated Reporting
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Faster Processing
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Customizations
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
                <!-- Price 2 -->
                <div class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Basic
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $15
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for medium-size businesses to larger businesses
                    </p>
                    <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Everything in Starter
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            100 Builds
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Progress Reports
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Premium Support
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
                <!-- Price 3 -->
                <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Plus
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $25
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for larger and enterprise companies
                    </p>
                    <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Everything in Basic
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Unlimited Builds
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Advanced Analytics
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Company Evaluations
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
  },
  {
    category: "Pricing",
    id: "pricing__2", // id is mandatory
    label: "<b>pricing</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900">
                <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                    Pricing Options
                </h2>
                <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                    We've got a plan for companies of any size
                </p>
            </div>
            <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Basic
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The basic plan is a good fit for smaller teams and startups
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $19
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
    
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
                <div class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Plus
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The plus plan is a good fit for medium-size to larger companies
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $39
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
                <div class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Pro
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The pro plan is a good fit for larger and enterprise companies.
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $59
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
  },

  //   footer
  {
    category: "Footer",
    id: "footer__1", // id is mandatory
    label: "<b>footer</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        About
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Blog
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Team
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Pricing
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Contact
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Terms
                    </a>
                </div>
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Dribbble</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                © 2021 SomeCompany, Inc. All rights reserved.
            </p>
        </div>
    </section>
    `,
  },
  {
    category: "Footer",
    id: "footer__2", // id is mandatory
    label: "<b>footer</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="text-gray-700 bg-white body-font">
        <div class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
            <a href="#_" class="text-xl font-black leading-none text-gray-900 select-none logo">tails<span class="text-indigo-600">.</span></a>
            <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2021 Tails - Tailwindcss Page Builder
            </p>
            <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
    
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
    
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </a>
    
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                </a>
    
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Dribbble</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </span>
        </div>
    </section>
    `,
  },
];
