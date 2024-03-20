// get admins
export async function fetchAdmins() {
  let url = "http://3.125.116.109:8080/admin-api/admins";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTE3ODQ3NjcsInN1YiI6IjciLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwibmFtZSI6IkpvaG4iLCJpbWFnZSI6InVzZXIuanBnIiwicm9sZSI6WyJST0xFX0FETUlOIl19.Ve5y5p3nOqus9OQ0fca8NNYOZK-Du89RLcjtPuwQmBo";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Handle non-successful responses here
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Handle other errors here
    throw error;
  }
}

// create a new admin
export async function createAdmin(projectData) {
  console.log(projectData);
  const newData = new FormData();
  newData.append("firstName", projectData.firstName);
  newData.append("lastName", projectData.lastName);
  newData.append("email", projectData.email);
  newData.append("password", projectData.password);
  newData.append("phoneNo", projectData.phoneNo);
  newData.append("isGlobal", projectData.isGlobal);
  newData.append("role", projectData.role);
  console.log("newData",newData);
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTE3ODQ3NjcsInN1YiI6IjciLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwibmFtZSI6IkpvaG4iLCJpbWFnZSI6InVzZXIuanBnIiwicm9sZSI6WyJST0xFX0FETUlOIl19.Ve5y5p3nOqus9OQ0fca8NNYOZK-Du89RLcjtPuwQmBo";
    const response = await fetch(`http://3.125.116.109:8080/admin-api/admins`, {
      method: "POST",
      body: newData,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      const error = new Error("An error occurred while creating the project");
      error.code = response.status;
      error.info = await response.json().catch(() => null); // Handle non-JSON responses
      console.error("Error:", error);
      throw error;
    }

    const { newproject } = await response.json();

    console.log(projectData);
    return newproject;
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
}
