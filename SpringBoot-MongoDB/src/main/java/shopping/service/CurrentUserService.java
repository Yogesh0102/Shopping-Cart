package shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shopping.shop.model.Users;
import shopping.shop.repository.UsersRepository;

import java.security.Principal;
import java.util.Optional;

@Service
public class CurrentUserService
{

    @Autowired
    UsersRepository UsersRepo;

    public Optional<Users> CurrentUser(Principal principal)
    {
        String name = principal.getName();
        System.out.println(name);
        return UsersRepo.findByUsername(name);
    }

    public String getuserrole(Principal principal)
    {
        System.out.println(UsersRepo.findByUsername(principal.getName()).get().getRole());
        return UsersRepo.findByUsername(principal.getName()).get().getRole();
    }

    public Optional<Users> getuserprofile(Principal principal)
    {
        System.out.println(UsersRepo.findByUsername(principal.getName()));
        return UsersRepo.findByUsername(principal.getName());
    }



    public String getuserid(Principal principal)
    {
        System.out.println(UsersRepo.findByUsername(principal.getName()).get().getId());
        return UsersRepo.findByUsername(principal.getName()).get().getId();
    }
    public String getusername(Principal principal)
    {
        System.out.println(UsersRepo.findByUsername(principal.getName()).get().getUsername());
        return UsersRepo.findByUsername(principal.getName()).get().getUsername();
    }
}


