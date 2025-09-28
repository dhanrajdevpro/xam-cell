// API service for communicating with the backend server

const API_BASE_URL = "/api";

class ApiService {
  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === "object") {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Authentication methods
  async login(credentials) {
    return this.request("/auth/login", {
      method: "POST",
      body: credentials,
    });
  }

  async register(userData) {
    return this.request("/auth/register", {
      method: "POST",
      body: userData,
    });
  }

  async logout() {
    return this.request("/auth/logout", {
      method: "POST",
    });
  }

  // Student methods
  async getStudents() {
    return this.request("/students");
  }

  async getStudent(id) {
    return this.request(`/students/${id}`);
  }

  async createStudent(studentData) {
    return this.request("/students", {
      method: "POST",
      body: studentData,
    });
  }

  async updateStudent(id, studentData) {
    return this.request(`/students/${id}`, {
      method: "PUT",
      body: studentData,
    });
  }

  async deleteStudent(id) {
    return this.request(`/students/${id}`, {
      method: "DELETE",
    });
  }

  // Utility methods
  async checkHealth() {
    return this.request("/health");
  }

  async getApiStatus() {
    return this.request("");
  }
}

// Export a singleton instance
export default new ApiService();
