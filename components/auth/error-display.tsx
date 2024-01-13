"use client";

const ErrorDisplay = ({ error }: { error: string | null }) => {
  console.log(error);
  switch (error) {
    case "CredentialsSignin":
      return (
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          Your credentials are incorrect or this account doesn&apos;t exist.
          Please try again
        </p>
      );
    case "OAuthSignin":
    case "OAuthCallback":
    case "OAuthCreateAccount":
    case "OAuthAccountNotLinked":
      return (
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          {" "}
          Unable to sign you in with this account. Please try again later
        </p>
      );
    case "Default":
      return (
        <p className="bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive text-center">
          An unexpected error occurred during the log in. Please try again
        </p>
      );
  }

  return null;
};

export default ErrorDisplay;
