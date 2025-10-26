// import { HiXMark } from "react-icons/hi2";
"use client";
import { createPortal } from "react-dom";
import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CgClose } from "react-icons/cg";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface ModalContextType {
  open: (name: string) => void;
  close: () => void;
  openName: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}

export default function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  useEffect(() => {
    if (openName !== "") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openName]);

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

interface Open {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}

function Open({ children, opens: opensWindowName }: Open) {
  // console.log(opensWindowName);
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "Modal components must be rendered within a Modal component."
    );
  }
  const { open } = context;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface Window {
  children?: React.ReactElement<{
    onCloseModal?: () => void;
    elementRef?: React.Ref<HTMLDivElement>;
  }>;
  name: string;
  allowOutsideClick?: boolean;
  showCloseBtn?: boolean;
  type?: "normal" | "product";
  // elementRef?: React.Ref<HTMLDivElement>;
}

function Window({
  children,
  name,
  // allowOutsideClick,
  showCloseBtn,
  type = "normal",
}: // elementRef,
Window) {
  const [isVisible, setIsVisible] = useState(false);

  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "Modal components must be rendered within a Modal component."
    );
  }

  const { openName, close } = context;
  const ref = useOutsideClick<HTMLDivElement>(close);

  useEffect(() => {
    if (name === openName) {
      setTimeout(() => setIsVisible(true), 0);
    } else {
      setIsVisible(false);
    }
  }, [name, openName]);

  if (name !== openName) return null;

  return createPortal(
    //Overlay
    <div
      className={`transition-all ease-in-out fixed h-[100dvh] top-0 left-0 right-0 w-full z-[1000]  ${
        type === "product" ? "bg-black/90" : "bg-black/40"
      }`}
    >
      {/*Modal */}
      {type === "normal" ? (
        <div
          className={`transition-all w-8/10 max-w-md duration-300 ease-in-out transform 
          fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl shadow-menu 
          ${
            isVisible
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-90 invisible"
          }`}
          style={{
            visibility: isVisible ? "visible" : "hidden",
          }}
          // className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl shadow-menu"
          ref={ref}
        >
          {/*close button */}
          {showCloseBtn && (
            <Button onClick={close}>
              <CgClose />
            </Button>
          )}
          <div className="p-5">
            {children && cloneElement(children, { onCloseModal: close })}
          </div>
        </div>
      ) : (
        <div ref={ref} className="size-full">
          {children &&
            cloneElement(children, { onCloseModal: close, elementRef: ref })}
        </div>
      )}
    </div>,
    document.body
  );
}

interface Button {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: Button) {
  return (
    <button
      className="absolute top-[1rem] right-[1rem] transition-all duration-200 rounded-full bg-gray-200 hover:bg-gray-300 hover:shadow p-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Modal.Open = Open;
Modal.Window = Window;
