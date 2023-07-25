import CreateNewStaff from "@/components/staffs/create";
function CreateStaff() {
    function addStaffHandler(enterMeetupData) {

    };
    return (
        <CreateNewStaff onAddStaff={addStaffHandler} />
    );
}

export default CreateStaff;