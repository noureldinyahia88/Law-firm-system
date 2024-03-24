import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
export { queryClient }


// get admins
export async function fetchAdmins() {
  let url = "http://3.125.116.109:8080/admin-api/admins";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
// get Lawers
export async function fetchLawers() {
  let url = "http://3.125.116.109:8080/admin-api/lawyers/all";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
// get clients
export async function fetchClients() {
  let url = "http://3.125.116.109:8080/admin-api/clients";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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


// delete Admin
export async function deleteAdmin({ id }) {
  const response = await fetch(`http://3.125.116.109:8080/admin-api/admins/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

// delete Lawyer
export async function deleteLawer({ id }) {
  const response = await fetch(`http://3.125.116.109:8080/admin-api/lawyers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, 
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

// create a new admin
export async function createAdmin(formData) {
  // console.log("sss",projectData);

  // console.log(newFormData);
  // try {
  //   const response = await fetch(`http://3.125.116.109:8080/admin-api/admins`, {
  //     method: 'POST',
  //     body: projectData,
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`, 
  //     },
  //   });
    

  //   if (!response.status === 200) {
  //     const error = new Error('An error occurred while creating the project');
  //     error.code = response.status;
  //     error.info = await response.json();
  //     console.error('Error:', error);
  //     throw error;
  //   }

  //   return response.json();
  // } catch (error) {
  //   console.error('Unexpected error:', error);
  //   throw error;
  // }

  try {
    const response = await fetch(`http://3.125.116.109:8080/admin-api/admins`, {
      method: 'POST',
      body: formData, // Pass FormData directly as the body
      headers: {
        // No need to set Content-Type for FormData, it will be automatically set
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
    });

    if (!response.ok) {
      const error = new Error('An error occurred while creating the admin');
      error.code = response.status;
      error.info = await response.json();
      console.error('Error:', error);
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
}

