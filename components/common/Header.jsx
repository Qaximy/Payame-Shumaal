"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInModal from "@/app/api/auth/SignInModal"; // Assuming the SignInModal component is placed here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("signIn");

  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleForgotPassword = () => {
    setModalMode("forgot");
    setIsForgotPasswordOpen(true);
  };

  const handleCreateAccount = () => {
    setModalMode("signup");
    setIsModalOpen(false); // Close modal when navigating to create account
  };

  const menuItems = [
    { title: "Home", path: "/" },
    {
      title: "Tour",
      path: "/tour",
      hasDropdown: true,
      dropdownItems: [
        { name: "Popular Tours", path: "/tour/popular" },
        { name: "Featured Tours", path: "/tour/feature" },
        { name: "Adventure Tours", path: "/tour/adventure" },
        { name: "Group Tours", path: "/tour/group" },
      ],
    },
    {
      title: "Destination",
      path: "/destination",
      hasDropdown: true,
      dropdownItems: [
        { name: "Europe", path: "/destination/europe" },
        { name: "Asia", path: "/destination/asia" },
        { name: "America", path: "/destination/america" },
      ],
    },
    {
      title: "Activities",
      path: "/activities",
      hasDropdown: true,
      dropdownItems: [
        { name: "Hiking", path: "/activities/hiking" },
        { name: "Swimming", path: "/activities/swimming" },
        { name: "Cultural", path: "/activities/cultural" },
      ],
    },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Travila"
              width={120}
              height={60}
              className="w-auto h-6 sm:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.path}
                  className={`text-gray-700 dark:text-gray-200 hover:text-yellow-500 flex items-center px-3 py-2 text-sm xl:text-base ${
                    pathname === item.path ? "text-yellow-500" : ""
                  }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          href={dropItem.path}
                          className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-yellow-500 ${
                            pathname === dropItem.path ? "text-yellow-500" : ""
                          }`}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 text-sm">EN</button>
            <button className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 text-sm">USD</button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1.5 bg-orange-400 text-black text-sm rounded-full hover:bg-yellow-500 transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 p-2 -mr-2"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.title)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      >
                        {item.title}
                        <span className="float-right ml-2 inline-block">
                          {openDropdown === item.title ? (
                            <svg className="w-4 h-4 transform rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </span>
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-4">
                          {item.dropdownItems.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.path}
                              className={`block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-yellow-500 ${
                                pathname === dropItem.path ? "text-yellow-500" : ""
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md ${
                        pathname === item.path ? "text-yellow-500" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-3 py-3 border-t border-gray-200 dark:border-gray-700 mt-2">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-700 dark:text-gray-200 text-sm">EN</button>
                  <button className="text-gray-700 dark:text-gray-200 text-sm">USD</button>
                  <button onClick={() => setIsModalOpen(true)}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onForgotPassword={handleForgotPassword}
        onCreateAccount={handleCreateAccount}
      />
    </header>
  );
};

export default Header;
