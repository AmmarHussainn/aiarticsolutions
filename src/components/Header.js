import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#Home', current: true },
  { name: 'About', href: '#About', current: false },
  { name: 'Services', href: '#Services', current: false },
  { name: 'Reviews', href: '#Reviews', current: false },
  { name: 'Pricing', href: '#Pricing', current: false },
  { name: 'FAQs', href: '#FAQs', current: false },
  { name: '+1 (404) 664-6609', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-white text-2xl font-bold">
                    <span className="text-blue-300">Arctic</span> AI
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' bg-opacity-50 backdrop-blur-md text-white' : item.name === "+1 (404) 664-6609" ? 'text-white bg-[#4594ff] hover:bg-opacity-50 hover:backdrop-blur-md hover:text-[#ffffff] rounded-[18px] '
                           :  'text-white hover:bg-opacity-50 hover:backdrop-blur-md hover:text-[#ffffff] ',
                          'rounded-md px-3 py-2 text-semibold font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden  bg-black">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : item.name == "+1 (404) 664-6609" ? 'text-white bg-[#4594ff] hover:bg-opacity-50 hover:backdrop-blur-md hover:text-[#ffffff] rounded-[18px] ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}