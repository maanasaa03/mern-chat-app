import { create } from "zustand";

const useConversation = create((set) => ({
	//similar to hooks where we have user,setUser
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;
