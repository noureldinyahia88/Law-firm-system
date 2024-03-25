import { QueryClient } from "@tanstack/react-query";
import { json } from "react-router-dom";
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
  let url = "http://3.125.116.109:8080/admin-api/lawyers";
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

// ******************Admin******************

// create a new admin
export async function createAdmin(data) {
  try {
    const response = await fetch(`http://3.125.116.109:8080/admin-api/admins`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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

// edit admin
export async function editAdmin({data,id}) {
  try {
    const response = await fetch(`http://3.125.116.109:8080/admin-api/admins/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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
// ******************Lawyer******************
// create a new Lawyer
export async function createLawyer(data) {
  try {
    const response = await fetch(`http://3.125.116.109:8080/admin-api/lawyers`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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

// edit lawyer
export async function editLawyer({data,id}) {
  try {
    const response = await fetch(`http://3.125.116.109:8080/admin-api/lawyers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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