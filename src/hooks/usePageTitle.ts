import { useEffect } from "react";

/**
 * Sets the browser tab title for the page it's called from. Restores the
 * previous title on unmount, so navigating away always leaves a sane title
 * behind.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
