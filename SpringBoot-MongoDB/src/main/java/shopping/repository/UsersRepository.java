package shopping.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shopping.shop.model.Users;

import java.util.Optional;

@Repository
public interface UsersRepository extends MongoRepository<Users,String>
{
    Optional<Users> findByUsername(String username);

}
