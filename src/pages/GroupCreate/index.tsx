import GroupCreateContainer from "../../container/GroupCreateContainer";

interface GroupCreateProps {}

const GroupCreate: React.FC<GroupCreateProps> = () => {
  return <div className="p-groupCreate">
    <GroupCreateContainer />
  </div>
}

export default GroupCreate;