// roles.ts
export const Roles = {
  Admin: "admin",
  Agent: "agent",
  Trustee: "trustee",
} as const;

export type RoleType = (typeof Roles)[keyof typeof Roles];

// user.ts
export interface UserType {
  username: string;
  email: string;
  role: RoleType;
  token: string;
}
