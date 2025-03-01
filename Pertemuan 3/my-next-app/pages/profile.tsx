const UserDetailPage = () => {
    const user = {
      id: 1,
      name: "Muhammad Iqbal Muhtaram",
      username: "iqbalmuhtaram",
      email: "iqbal@example.com",
      phone: "081818139745",
      website: "udh4saudara.com",
      address: {
        street: "Arjasa",
        city: "Sumenep, East Java",
      },
      company: {
        name: "Udh 4 Saudara",
      },
    };
  
    return (
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h1>{user.name}</h1>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
      </div>
    );
  };
  
  export default UserDetailPage;
  