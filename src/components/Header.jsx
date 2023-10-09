import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsBag } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { PiBagBold } from "react-icons/pi";
import { useCart } from "./CartContextAPI";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ setSearch }) {
  const { cartItems } = useCart();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <a
              href="/"
              className="relative rounded-full p-1 text-white hover:bg-slate-100 hover:text-black"
            >
              <span className="absolute -inset-1.5" />
              <AiFillHome className="h-6 w-6" />
            </a>
          </div>
          <div className="lg:w-[20%] md:w-[30%] sm:w-[40%]">
            <input
              className="w-full bg-none rounded px-2 py-1 focus:outline-none"
              placeholder="Search...."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="relative rounded-full p-1 mx-4 text-white hover:bg-slate-100 hover:text-black"
            >
              <span className="absolute -inset-1.5" />
              <BsBag className="h-6 w-6" />
              <span className="absolute top-0 -right-2 bg-indigo-600 text-white px-1 rounded-full text-center text-xs">
                {cartItems.length}
              </span>
            </a>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                  <span className="absolute -inset-1.5" />
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
