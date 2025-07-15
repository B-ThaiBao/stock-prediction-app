import { create } from "zustand";
import axiosInstance from "../lib/axios";

const useAuthStore = create((set) => ({
	isAuthUser: false,
	hasToken: false,
	error : null,
	isSigningUp: false,
	isLoggingIn: false,

	signup: async (data) => {
		set({ isSigningUp: true });
		try {
			const res = await axiosInstance.post("/api/v1/signup/", data);
			set({ isAuthUser: true });
			set({ error: null });
		} catch (error) {
			set({ isAuthUser: false });
			set({ error: error.response.data });
		} finally {
			set({ isSigningUp: false });
		}
	},

	login: async (data) => {
		set({ isLoggingIn: true });
		try {
			const res = await axiosInstance.post("/api/v1/token/", data);
			localStorage.setItem("access_token", res.data.access);
			localStorage.setItem("refresh_token", res.data.refresh);
			set({ isAuthUser: true });
			set({ hasToken: true });
			set({ error: null });
		} catch (error) {
			set({ isAuthUser: false });
			set({ error: error.response.data });
		} finally {
			set({ isLoggingIn: false });
		}
	},

	checkToken: () => {
		set({ hasToken: !!localStorage.getItem("access_token") });
	},

	logout: () => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		set({ hasToken: false });
	}
}));

export default useAuthStore;
