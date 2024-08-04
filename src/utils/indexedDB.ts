import { PostType } from "./../type";

export const openIndexedDB = <T>(
  method: string,
  data?: T | string
): Promise<PostType[] | void | PostType> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("toward99", 1);

    request.onupgradeneeded = (e) => {
      const dbRequest = e.target as IDBOpenDBRequest;
      if (dbRequest === null) {
        return;
      }
      const db = dbRequest.result;
      const objectStore = db.createObjectStore("board", {
        keyPath: "key",
      });
      objectStore.createIndex("key", "key", { unique: true });
    };

    request.onsuccess = (e) => {
      const dbRequest = e.target as IDBOpenDBRequest;
      if (dbRequest === null) {
        return;
      }
      const db = dbRequest.result;
      const boardDB = db.transaction("board", "readwrite").objectStore("board");

      switch (method) {
        case "GET":
          data == undefined
            ? getPostList(boardDB).then(resolve).catch(reject)
            : getPostById(boardDB, data as string)
                .then(resolve)
                .catch(reject);
          break;
        case "POST":
          createPost(boardDB, data).then(resolve).catch(reject);
          break;
      }
    };

    request.onerror = () => {
      alert("DB조회를 실패했습니다.");
    };
  });
};

const getPostList = (db: IDBObjectStore): Promise<PostType[]> => {
  return new Promise((resolve, reject) => {
    const requestDB = db.getAll();
    requestDB.onsuccess = () => resolve(requestDB.result);
    requestDB.onerror = () => reject(new Error("조회를 실패했습니다."));
  });
};

const getPostById = (db: IDBObjectStore, data: string): Promise<PostType> => {
  return new Promise((resolve, reject) => {
    const requestDB = db.get(data);
    requestDB.onsuccess = () => resolve(requestDB.result);
    requestDB.onerror = () => reject(new Error("조회를 실패했습니다."));
  });
};

const createPost = <T>(db: IDBObjectStore, data: T): Promise<void> => {
  return new Promise((resolve, reject) => {
    const requestDB = db.add(data);
    requestDB.onsuccess = () => resolve();
    requestDB.onerror = () => reject(new Error("등록을 실패했습니다."));
  });
};
