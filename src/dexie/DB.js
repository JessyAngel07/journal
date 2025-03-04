import Dexie from "dexie";

export const db = new Dexie('MyJournal');

db.version(1).stores({
    journal: "++id,story"
})

db.version(2).stores({
    journalsList: "++id,heading,date"
})

db.version(3).stores({
    projectList: "++id,name,project,explanation,experience,start,end"
})


