import {CloseIcon, DeleteIcon} from "@/components/icons";
import {Button} from "@/components/ui/Button";

const DeleteConfirmationModal = ({setIsOpen, onCancel, handleComfirm})=>{
    const closeModal = () => {
        setIsOpen(false)
    }
    return(
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}/>
            <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                <div className="relative text-center bg-white rounded-lg shadow-lg p-5">
                    <button type="button" className="close-icon-button" onClick={closeModal}>
                        <CloseIcon/>
                    </button>
                    <div className="flex items-center justify-center text-red-500">
                        <DeleteIcon className="h-16 w-16"/>
                    </div>
                    <p className="my-6 font-semibold text-xl">
                        Are you sure you want to delete?
                    </p>
                    <div className="flex justify-end items-center space-x-4">
                        <Button
                            type="button"
                            className="bg-transparent text-black border border-gray-600" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleComfirm}>
                            Confirm
                        </Button>
                    </div>
                </div>
        </div>
</div>
)
}
export default DeleteConfirmationModal;