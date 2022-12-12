let id = 1;

export const nextId = () => id++;

export const users = [
  {
    id: nextId(),
    name: "Riley Welch",
    email: "rileywelch@earthplex.com",
    age: 23,
    profile_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Mercer Barrett",
    email: "mercerbarrett@earthplex.com",
    age: 19,
    profile_id: 3,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Letitia Sears",
    email: "letitiasears@earthplex.com",
    age: 19,
    profile_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Dixie Tanner",
    email: "dixietanner@earthplex.com",
    age: 26,
    profile_id: 3,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Bright Greer",
    email: "brightgreer@earthplex.com",
    age: 30,
    profile_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Frank Mathis",
    email: "frankmathis@earthplex.com",
    age: 21,
    profile_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Lilian Bartlett",
    email: "lilianbartlett@earthplex.com",
    age: 31,
    profile_id: 1,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Herrera Mcneil",
    email: "herreramcneil@earthplex.com",
    age: 32,
    profile_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextId(),
    name: "Lucinda Estrada",
    email: "lucindaestrada@earthplex.com",
    age: 26,
    profile_id: 2,
    status: 'INACTIVE'
  },
  {
    id: nextId(),
    name: "Eula Arnold",
    email: "eulaarnold@earthplex.com",
    age: 39,
    profile_id: 2,
    status: 'BLOCKED'
  },
];

export const profiles = [
  {
    id: nextId(),
    name: 'Administrator'
  },
  {
    id: nextId(),
    name: 'default'
  },
  {
    id: nextId(),
    name: 'manager'
  }
];

