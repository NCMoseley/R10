// import Realm from "realm";

// const FaveSchema = {
//   name: "Fave",
//   primaryKey: "fave_id",
//   properties: {
//     fave_id: "string",
//     faved_on: "date"
//   }
// };
// const realm = new Realm({ schema: [FaveSchema] });
// console.log("the path is: ", realm.path);

// export const queryFaves = () => {
//   return realm.objects("Fave");
// };

// export const createFave = id => {
//   realm.write(() => {
//     realm.create("Fave", { fave_id: id, fave_on: new Date() });
//   });
// };

// export const deleteFave = id => {
//   realm.write(() => {
//     const faveToDelete = realm.objects("Fave").filtered("fave_id == $0", id);
//     realm.delete(faveToDelete);
//   });
// };

// export default realm;

import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryFaves = () => {
  return realm.objects("Fave");
};

export const createFave = id => {
  realm.write(() => {
    realm.create("Fave", { id: id, faved_on: new Date() });
  });
};

export const deleteFave = id => {
  realm.write(() => {
    const deleteFave = realm.objects("Fave").filtered("id == $0", id);
    realm.delete(deleteFave);
  });
};

export default realm;
