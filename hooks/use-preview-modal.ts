import { create } from "zustand";
import { Evento } from "@/types";

interface PreviewModalStore{
    isOpen:boolean;
    data?: Evento;
    onOpen: (data:Evento) => void;
    onClose : () => void;
}
const usePreviewModal = create<PreviewModalStore>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Evento)=>set({data,isOpen:true}),
    onClose:()=>set({isOpen:false})
}))
export default usePreviewModal;