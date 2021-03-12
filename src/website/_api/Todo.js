import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/todos";

class Todo {
  payload = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  id = "";

  get = () => {
    this.payload.method = "GET";

    return this.request();
  };

  getTodo = (id) => {
    this.id = id;
    this.payload.method = "GET";

    return this.request();
  };

  create = ({ title }) => {
    this.payload.method = "POST";
    this.payload.body = JSON.stringify({
      userId: Math.floor(Math.random() * 10 + 1),
      title,
    });

    return this.request();
  };

  update = ({ id, title }) => {
    let tempId = id;

    if (id > 200) {
      tempId = 200;
    }

    this.id = tempId;
    this.payload.method = "PUT";
    this.payload.body = JSON.stringify({
      userId: Math.floor(Math.random() * 10 + 1),
      title,
      id: tempId,
    });

    return this.request();
  };

  deleter = (id) => {
    this.id = id;
    this.payload.method = "DELETE";

    return this.request();
  };

  async request() {
    let result;

    try {
      result = await fetch(`${url}/${this.id}`, { ...this.payload });

      return result.json();
    } catch (err) {
      return err;
    }
  }
}

export default Todo;
