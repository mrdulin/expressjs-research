interface MyDocment {}

export const fetchSettings = async (firestore): Promise<MyDocment> => {
  try {
    const response = await firestore.collection('someCollection').doc('someDoc').get();
    const data = response.data()!;
    return {
      dataOne: data.someDataOne,
      dataTwo: data.someDataTwo,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
