import { create } from "zustand";
import axiosInstance from "../lib/axios";

const useAuthStore = create((set) => ({
	authUser: null,
	error : null,
	isSigningUp: false,

	signup: async (data) => {
		set({ isSigningUp: true });
		try {
			const response = await axiosInstance.post("/api/v1/signup/", data);
			set({ authUser: response.data });
			set({ error: null });
		} catch (error) {
			set({ authUser: null });
			set({ error: error.response.data });
		} finally {
			set({ isSigningUp: false });
		}
	},
}));

export default useAuthStore;
