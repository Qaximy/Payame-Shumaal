'use client';
import { useState } from "react";
import Modal from "@/components/common/Modal";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;
}

const SignInModal = ({
  isOpen,
  onClose,
  onForgotPassword,
}: SignInModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  // For "Create Account" form
  const [modalMode, setModalMode] = useState("signIn"); // Tracks the form mode (signIn, forgot, signup)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, password });
    onClose();  // Close the modal after form submission.
  };

  const handleForgotPassword = () => {
    setModalMode("forgot");
  };

  const handleCreateAccount = () => {
    setModalMode("signup");  // Switch to the "Create Account" form
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-xl mb-4">
          {modalMode === "signIn"
            ? "Sign In"
            : modalMode === "forgot"
            ? "Forgot Password"
            : "Create Account"}
        </h2>

        {modalMode === "signIn" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-500 text-sm"
              >
                Forgot Password?
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-orange-400 text-black text-sm rounded-full hover:bg-yellow-500 transition-colors"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {modalMode === "forgot" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Enter your email to reset password
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setModalMode("signIn")}
                className="text-blue-500 text-sm"
              >
                Back to Sign In
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-orange-400 text-black text-sm rounded-full hover:bg-yellow-500 transition-colors"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}

        {modalMode === "signup" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setModalMode("signIn")}
                className="text-blue-500 text-sm"
              >
                Back to Sign In
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-orange-400 text-black text-sm rounded-full hover:bg-yellow-500 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {modalMode === "signIn" && (
          <div className="mt-4">
            <button
              onClick={handleCreateAccount}  // Switches to the "Create Account" form
              className="text-blue-500 text-sm"
            >
              Don't have an account? Create Account
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SignInModal;
