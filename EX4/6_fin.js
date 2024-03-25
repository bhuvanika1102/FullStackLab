const jsonObject = {
    name: 'Bhuvani',
    age: 25,
    city: 'New York',
    occupation: 'Engineer'
  };
  console.log('Original Object Properties:');
  for (const property in jsonObject) {
    if (jsonObject.hasOwnProperty(property)) {
      console.log(`${property}: ${jsonObject[property]}`);
    }
  }
  const keys = Object.keys(jsonObject);
  if (keys.length >= 2) {
    const secondProperty = keys[1];
    delete jsonObject[secondProperty];
    console.log(`\nObject after deleting the second property (${secondProperty}):`, jsonObject);
  } else {
    console.log('\nObject does not have a second property to delete.');
  }
  const objectLength = Object.keys(jsonObject).length;
  console.log(`\nLength of the Object after deletion: ${objectLength}`);
  