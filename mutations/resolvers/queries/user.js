import { profiles } from "../../database/data.js";

const salary = (user) => user.real_salary;
const profile = (user) => profiles.find(p => p.id === user.profile_id);

export const User = { salary, profile };
