export default class Fetch {
  static async getData(url) {
    const res = await fetch(url, {
      method: 'GET',
    });

    const json = res.json();

    return json;
  }

  static async postData(url, data) {
    // const res = await fetch(url, {
    //   method: 'POST',
    //   body: data,
    // });
    //
    // const json = res.json();
    //
    // return json;
    console.log('POST', url, data);
  }

  static async putData(url, data) {
    // const res = await fetch(url, {
    //   method: 'PUT',
    //   body: data,
    // });
    //
    // const json = res.json();
    //
    // return json;
    console.log('PUT', url, data);
  }

  static async deleteData(url) {
    // const res = await fetch(url, {
    //   method: 'DELETE',
    // });
    //
    // const json = res.json();
    //
    // return json;
    console.log('DELETE', url);
  }
}
