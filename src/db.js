import Dexie from "dexie";

export const db = new Dexie("ClimbAppDb");

db.version(1).stores({
  logs: "++id,grade,date",
});

export const addLog = (grade) => db.logs.add({ grade, date: new Date() });
export const deleteLog = (id) => db.logs.delete(id);
