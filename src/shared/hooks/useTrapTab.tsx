import { useEffect } from "react";

const useTrapTab = (isModalOpen: boolean, modalRef: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!isModalOpen) return;

        const modalElement = modalRef.current;
        if (!modalElement) return;

        const focusableElements = modalElement.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        };

        document.addEventListener("keydown", handleTab);
        firstFocusable.focus();

        return () => {
            document.removeEventListener("keydown", handleTab);
        };
    }, [isModalOpen, modalRef]);
};

export {  useTrapTab };
