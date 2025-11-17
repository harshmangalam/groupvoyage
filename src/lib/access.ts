export const USER_ROLE = {
  user: "user",
  admin: "admin",
  groupOwner: "group_owner",
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

const GROUP_DASHBOARD_ACCESS_ROLES = [
  USER_ROLE.groupOwner,
  USER_ROLE.admin,
] as const;

export function checkGroupDashboardAccess(role?: any): boolean {
  if (!role) return false;
  return GROUP_DASHBOARD_ACCESS_ROLES.includes(role);
}
