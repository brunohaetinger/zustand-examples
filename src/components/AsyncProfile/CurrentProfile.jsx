import { useEffect } from "react";
import { useAsyncProfileStore } from "../../store/asyncProfile/asyncProfileStore";

export const CurrentProfile = () => {
  const { profile } = useAsyncProfileStore();

  if (!profile) return null;
  const { name, location, picture, email } = profile;

  return (
    <div className="flex-column">
      <img className="profile-picture" src={picture.large} alt="Profile" />
      <span>
        {name.title} {name.last}
      </span>
      <span>{email}</span>
      <span>{location.country}</span>
    </div>
  );
};
