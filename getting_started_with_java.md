# Java Backend Guide — Getting Started with Spring Boot

This guide will walk you through how to build your backend for the Reverb clone using **Java + Spring Boot**. It's written with new Java developers in mind and focuses on clarity and structure. By following this outline, you’ll learn to build a modern REST API that works seamlessly with your React frontend. DO NOT USE THIS AS YOUR BACKEND, IT IS SIMPLY MENT AS A GUIDE TO GET YOU STARTED. 

---

## 1. Project Setup

### Use Spring Initializr:
Go to [start.spring.io](https://start.spring.io/) and configure:
- **Project:** Maven
- **Language:** Java
- **Spring Boot Version:** (latest stable)
- **Dependencies:**
  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver
  - Spring Boot DevTools
  - Spring Security (optional, for auth)

Download the project and open it in IntelliJ IDEA or VS Code.

---

## 2. Folder Structure
```
src/main/java/com/reverbclone/
├── ReverbCloneApplication.java
├── controller/
├── model/
├── repository/
├── service/
└── config/ (optional for security)
```

---

## 3. Define Models (Entities)
Create classes inside the `model/` folder. Use JPA annotations to define your tables.

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;

    // Getters, setters, constructors
}
```

---

## 4. Create Repositories
Spring Data JPA makes this easy:

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
```

---

## 5. Create Services
This is where your business logic goes:

```java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
```

---

## 6. Create Controllers
Expose your endpoints here:

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }
}
```

---

## 7. (Optional) Add Auth
If you want to include authentication:
- Use **Spring Security** for JWT or session-based login
- Or handle manually for now and protect routes later

> Note: If you're new, focus on getting CRUD routes working before adding auth.

---

## 8. Testing with Postman
Once your routes are set up:
- Use Postman or Thunder Client to send requests (e.g. POST to `/api/users/signup`)
- Check database entries (e.g. Render PostgreSQL or local db)

---

## 9. Deployment
- Deploy to [Render](https://render.com/) or [Railway](https://railway.app/)
- Make sure your `.env` or `application.properties` uses:
  ```properties
  spring.datasource.url=jdbc:postgresql://your-db-url
  spring.datasource.username=youruser
  spring.datasource.password=yourpassword
  spring.jpa.hibernate.ddl-auto=update
  ```

---

## Final Tips
- Keep your code organized by feature (model/service/controller)
- Start small: one entity + controller route
- Don’t try to build everything at once — build feature by feature

---

### You Got This 
Building a backend in Java might feel new, but by the end of this project you’ll have:
- Designed a real REST API
- Connected it to a frontend
- Learned core principles of backend development

Remember that now is the time to ask questions and break things. 