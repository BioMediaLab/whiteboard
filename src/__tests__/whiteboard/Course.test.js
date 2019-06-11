import GqlClient from "__tests__/helpers/gql";
import getUser from "__tests__/helpers/get-user";

const {
  PROFESSOR_USERNAME,
  PROFESSOR_PASSWORD,
  STUDENT_USERNAME,
  STUDENT_PASSWORD
} = process.env;
let professor, student;

beforeAll(async () => {
  professor = await getUser({
    username: PROFESSOR_USERNAME,
    password: PROFESSOR_PASSWORD
  });
  student = await getUser({
    username: STUDENT_USERNAME,
    password: STUDENT_PASSWORD
  });
});

describe("Professor:", () => {
  test("can create course", () => {
    const { jwtToken } = professor;

    const gql = new GqlClient({ headers: { Authorization: jwtToken } });

    return gql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `).expect(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toContainKey("data");
      expect(res.body.data).toContainKey("createCourse");
      expect(res.body.data.createCourse).toContainAllKeys([
        "id",
        "description",
        "title"
      ]);
    });
  });

  test("can read course", async () => {
    const { jwtToken } = professor;

    const gql = new GqlClient({ headers: { Authorization: jwtToken } });

    const response = await gql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `);
    const newRecordId = response.body.data.createCourse.id;

    return gql(`
      {
        getCourse(id: "${newRecordId}") {
          id
        }
      }
    `).expect(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toContainKey("data");
      expect(res.body.data).toContainKey("getCourse");
      expect(res.body.data.getCourse.id).toEqual(newRecordId);
    });
  });

  test("can update course", async () => {
    const { jwtToken } = professor;

    const gql = new GqlClient({ headers: { Authorization: jwtToken } });

    const response = await gql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `);
    const newRecordId = response.body.data.createCourse.id;

    return gql(`
      mutation {
        updateCourse(input: {
          id: "${newRecordId}"
          title: "Example 101 with an update"
        }) {
          id
          title
        }
      }
    `).expect(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toContainKey("data");
      expect(res.body.data).toContainKey("updateCourse");
      expect(res.body.data.updateCourse).toContainAllKeys(["id", "title"]);
      expect(res.body.data.updateCourse.title).toEqual(
        "Example 101 with an update"
      );
    });
  });

  test("can delete course", async () => {
    const { jwtToken } = professor;

    const gql = new GqlClient({ headers: { Authorization: jwtToken } });

    const createResponse = await gql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `);
    const newRecordId = createResponse.body.data.createCourse.id;

    const deleteResponse = await gql(`
      mutation {
        deleteCourse(input: {
          id: "${newRecordId}"
        }) {
          id
        }
      }
    `);

    return gql(`
      {
        getCourse(id: "${newRecordId}") {
          id
        }
      }
    `).expect(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toContainKey("data");
      expect(res.body.data.getCourse).toEqual(null);
    });
  });
});

describe("Student:", () => {
  test("can not create course", () => {
    const { jwtToken } = student;

    const gql = new GqlClient({ headers: { Authorization: jwtToken } });

    return gql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `).expect(res => {
      const unauthorizedError = res.body.errors.some(
        error => error.errorType === "Unauthorized"
      );
      expect(unauthorizedError).toBeTrue();
    });
  });

  test("can read course", async () => {
    const { jwtToken: studentJwt } = student;

    const gql = new GqlClient({
      headers: { Authorization: studentJwt }
    });

    return gql(`
      {
        listCourses {
          items {
            id
          }
        }
      }
    `).expect(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toContainKey("data");
      expect(res.body.data).toContainKey("listCourses");
      expect(res.body.data.listCourses.items).toBeArray();
    });
  });

  test("can not update course", async () => {
    const { jwtToken: professorJwt } = professor;
    const { jwtToken: studentJwt } = student;

    const professorGql = new GqlClient({
      headers: { Authorization: professorJwt }
    });
    const studentGql = new GqlClient({
      headers: { Authorization: studentJwt }
    });

    const response = await professorGql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `);
    const newRecordId = response.body.data.createCourse.id;

    return studentGql(`
      mutation {
        updateCourse(input: {
          id: "${newRecordId}"
          title: "Example 101 with an update"
        }) {
          id
          title
        }
      }
    `).expect(res => {
      const unauthorizedError = res.body.errors.some(
        error => error.errorType === "Unauthorized"
      );
      expect(unauthorizedError).toBeTrue();
    });
  });

  test("can not delete course", async () => {
    const { jwtToken: professorJwt } = professor;
    const { jwtToken: studentJwt } = student;

    const professorGql = new GqlClient({
      headers: { Authorization: professorJwt }
    });
    const studentGql = new GqlClient({
      headers: { Authorization: studentJwt }
    });

    const createResponse = await professorGql(`
      mutation {
        createCourse(input: {
          title: "Example 101"
          description: "An example course"
        }) {
          id
          title
          description
        }
      }
    `);
    const newRecordId = createResponse.body.data.createCourse.id;

    return studentGql(`
      mutation {
        deleteCourse(input: {
          id: "${newRecordId}"
        }) {
          id
        }
      }
    `).expect(res => {
      const unauthorizedError = res.body.errors.some(
        error => error.errorType === "Unauthorized"
      );
      expect(unauthorizedError).toBeTrue();
    });
  });
});
