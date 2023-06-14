export async function isCompliant(dataSources, partnerList) {
  for (let i = 0; i < partnerList.length; i++) {
    try {
      let response = await dataSources.storageService.retrieveConfig(partnerList[i]);
      if (!response) {
        return false;
      }
    } catch (e) {
      throw 401;
    }
  }
  return true;
}