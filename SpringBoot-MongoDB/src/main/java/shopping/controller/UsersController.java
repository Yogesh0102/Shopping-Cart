package shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shopping.shop.model.Users;
import shopping.shop.repository.UsersRepository;
import shopping.shop.service.CurrentUserService;

import javax.validation.Valid;
import java.security.Principal;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class UsersController
{

    @Autowired
    UsersRepository UsersRepo;
    @Autowired
    CurrentUserService currentUserService;

    @GetMapping("/get1")
    public List<Users> getAllNotes() {
        return UsersRepo.findAll();
    }

    @GetMapping(produces = "application/json")
    @RequestMapping({ "/validateLogin" })
    public Users validateLogin() {
        return new Users("User successfully authenticated");
    }

    @GetMapping("/get_user")
    public Optional<Users> getUser(@RequestParam String username)
    {
        return UsersRepo.findByUsername(username);
    }

    @PostMapping("/post1")
    public Users createNote(@Valid @RequestBody Users user1) {
        user1.setRole("User");
        user1.setActive(1);
        return UsersRepo.save(user1);
    }

    @PutMapping("/put_user")
    public Users putting(@Valid @RequestBody Users user , Principal principal)
    {
        Users user1 = currentUserService.CurrentUser(principal).get();
        user1.setUsername(user.getUsername());
        user1.setEmail(user.getEmail());
        user1.setGender(user.getGender());
        user1.setPhone(user.getPhone());
        user1.setPassword(user.getPassword());
        user1.setActive(1);
        return UsersRepo.save(user1);
    }

    @GetMapping("/get_role")
    public String getRole(@RequestParam String username)
    {
        return getUser(username).get().getRole();
    }
}