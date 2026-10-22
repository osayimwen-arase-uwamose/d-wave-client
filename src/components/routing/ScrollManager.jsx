import { useLayoutEffect, useRef } from "react";
import {
useLocation,
useNavigationType,
} from "react-router-dom";

const scrollPositions = new Map();

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  const previousLocation = useRef({
  key: location.key,
  state: location.state,
  });

  const pendingSectionRef = useRef(null);

  useLayoutEffect(() => {
    const locationKey = location.key;

    const saveScrollPosition = () => {
      scrollPositions.set(locationKey, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", saveScrollPosition, {
      passive: true,
    });

    saveScrollPosition();

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      saveScrollPosition();
    };
  }, [location.key]);

  useLayoutEffect(() => {
    const previous = previousLocation.current;

    const isConsumingSectionRequest =
      Boolean(previous.state?.scrollTo) &&
      !location.state?.scrollTo;

    previousLocation.current = {
      key: location.key,
      state: location.state,
    };

    if (isConsumingSectionRequest) {
      return;
    }

    if (location.state?.scrollTo) {
      pendingSectionRef.current = location.state.scrollTo;
      return;
    }

    if (navigationType === "POP") {
      pendingSectionRef.current = null;

      const savedPosition = scrollPositions.get(location.key);

      if (savedPosition) {
        window.scrollTo({
          left: savedPosition.x,
          top: savedPosition.y,
          behavior: "instant",
        });
      }

      return;
    }

    if (previous.key !== location.key) {
      pendingSectionRef.current = null;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

  }, [
    location.key,
    location.state,
    navigationType,
  ]);

  useLayoutEffect(() => {
    const scrollToSection = (sectionId) => {
    if (!sectionId) return;


      const target = document.getElementById(sectionId);

      if (!target) return;

      const targetRect = target.getBoundingClientRect();

      const targetCenter =
        targetRect.top +
        window.scrollY +
        targetRect.height / 2;

      const viewportCenter = window.innerHeight / 2;

      const destination = Math.max(
        0,
        targetCenter - viewportCenter
      );

      window.scrollTo({
        top: destination,
        behavior: "smooth",
      });
    };

    const handleSectionRequest = (event) => {
      scrollToSection(event.detail?.sectionId);
    };

    window.addEventListener(
      "app:scroll-to-section",
      handleSectionRequest
    );

    const requestedSection = pendingSectionRef.current;

    if (requestedSection) {
      const target = document.getElementById(requestedSection);

      if (target) {
        scrollToSection(requestedSection);
        pendingSectionRef.current = null;
      }
    }

    return () => {
      window.removeEventListener(
        "app:scroll-to-section",
        handleSectionRequest
      );
    };

  }, [location.key]);

  return null;
};

export default ScrollManager;
