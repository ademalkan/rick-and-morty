import { eCharacterStatus } from "../enum";

export const characterStatusBackgroundColorPicker = (
  status: eCharacterStatus
) => {
  switch (status) {
    case eCharacterStatus.ALIVE:
      return "bg-green-500";
      break;
    case eCharacterStatus.DEAD:
      return "bg-red-500";
      break;
    case eCharacterStatus.UNKNOWN:
      return "bg-gray-500";
      break;
    default:
      return "bg-gray-500";
      break;
  }
};
