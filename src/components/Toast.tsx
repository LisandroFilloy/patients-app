// components/Toast.tsx
import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  description: string;
  type: "success" | "error"; // Type to determine the color and icon
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, description, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Close the toast after 4 seconds
    }, 4000); // Adjust duration of toast

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="font-semibold text-white">{message}</div>
      <div className="text-white text-sm">{description}</div>
    </div>
  );
};

export default Toast;
