import { PostType } from "./../type";

export const openIndexedDB = (
  method: string,
  data?: PostType | string
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
          createPost(boardDB, data as PostType)
            .then(resolve)
            .catch(reject);
          break;
        case "PATCH":
          editPost(boardDB, data as PostType)
            .then(resolve)
            .catch(reject);
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
    requestDB.onsuccess = () => {
      const editHitsData: PostType = {
        ...requestDB.result,
        hit: requestDB.result.hit + 1,
      };
      db.put(editHitsData);
      resolve(editHitsData);
    };
    requestDB.onerror = () => reject(new Error("조회를 실패했습니다."));
  });
};

const createPost = (db: IDBObjectStore, data: PostType): Promise<void> => {
  return new Promise((_, reject) => {
    const requestDB = db.add(data);
    requestDB.onerror = () => reject(new Error("등록을 실패했습니다."));
  });
};

const editPost = (db: IDBObjectStore, data: PostType): Promise<void> => {
  return new Promise((_, reject) => {
    const requestDB = db.get(data.key);
    requestDB.onsuccess = () => {
      db.put(data);
    };
    requestDB.onerror = () => reject(new Error("수정을 실패했습니다."));
  });
};
