import { FC } from "react";
import { User } from "next-auth";
import { AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Icons } from "./icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      <AvatarImage src={user.image ?? ""} alt={user.name ?? "user avatar"} />
      <AvatarFallback>
        <span className="sr-only">{user?.name}</span>
        <Icons.user className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
