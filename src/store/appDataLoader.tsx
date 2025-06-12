"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { loadAllData } from "@/store";
import { useAuth } from "@/context/authContext";

export default function AppDataLoader() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(loadAllData());

    const interval = setInterval(() => {
      dispatch(loadAllData());
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch, isAuthenticated]);

  return null;
}