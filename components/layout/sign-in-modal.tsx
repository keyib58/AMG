"use client";

import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { LoadingDots } from "@/components/shared/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message
  const router = useRouter(); // Initialize the useRouter hook

  const handleSignIn = async () => {
    setSignInClicked(true);
    setError(""); // Clear any previous error message

    const result = await signIn("credentials", {
      redirect: false, // Prevents automatic redirect
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password"); // Set error message if sign-in fails
      setSignInClicked(false);
    } else {
      setShowSignInModal(false); // Close modal on successful sign-in
      router.refresh(); // Refresh the current route to reflect the logged-in state
    }
  };

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Sign In
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500">
            Sign in with your email and password.
          </Dialog.Description>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
          />
          <button
            disabled={signInClicked}
            className={`${signInClicked
              ? "border-gray-200 bg-gray-100"
              : "border border-gray-200 bg-white text-black hover:bg-gray-50"
              } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={handleSignIn}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <p>Sign In</p>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
